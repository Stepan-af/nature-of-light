#!/usr/bin/env node
/**
 * Cross-checks public/admin/config.yml (Sveltia CMS) against the Astro content
 * schemas in src/content.config.ts and against src/content/data/settings.json.
 *
 *   node docs/check-cms-config.mjs            # schema cross-check (offline)
 *   node docs/check-cms-config.mjs --schema   # + validate against Sveltia's JSON schema (needs network)
 *
 * Requires Node >= 22.18 (native TypeScript type stripping). The `yaml` and
 * `ajv` packages are transitive dependencies of astro / @astrojs/check.
 *
 * How it works: src/content.config.ts is imported with `astro:content` and
 * `astro/loaders` replaced by tiny stubs, so the real zod schemas can be walked.
 */
import { readFileSync } from 'node:fs';
import { register } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { parse } from 'yaml';

const root = new URL('../', import.meta.url);
const read = (p) => readFileSync(new URL(p, root), 'utf8');

// ---------------------------------------------------------------- stubs
const stubContent = `
import { z } from 'astro/zod';
export const defineCollection = (c) => c;
export const reference = (name) => { const s = z.string(); s.__reference = name; return s; };
`;
const stubLoaders = `export const glob = (o) => ({ kind: 'glob', ...o }); export const file = (p) => ({ kind: 'file', path: p });`;
const hooks = `
const map = {
  'astro:content': 'data:text/javascript,' + encodeURIComponent(${JSON.stringify(stubContent)}),
  'astro/loaders': 'data:text/javascript,' + encodeURIComponent(${JSON.stringify(stubLoaders)}),
};
export async function resolve(specifier, context, next) {
  if (map[specifier]) return { url: map[specifier], shortCircuit: true };
  if (context.parentURL?.startsWith('data:') && specifier === 'astro/zod') {
    return next(specifier, { ...context, parentURL: ${JSON.stringify(pathToFileURL(fileURLToPath(root)).href)} });
  }
  return next(specifier, context);
}`;
register('data:text/javascript,' + encodeURIComponent(hooks), import.meta.url);

const { z } = await import('astro/zod');
const { collections } = await import(new URL('src/content.config.ts', root).href);

// ---------------------------------------------------------------- zod → descriptor
const imageStub = () => {
  const s = z.string();
  s.__image = true;
  return s;
};

/** @returns {{required: boolean, default?: unknown, kind: string, int?: boolean, values?: unknown[], ref?: string, shape?: object, element?: object}} */
function describe(schema) {
  let s = schema;
  let required = true;
  let dflt;
  for (;;) {
    const t = s._zod.def.type;
    if (t === 'optional' || t === 'nullable') {
      required = false;
      s = s._zod.def.innerType;
    } else if (t === 'default') {
      required = false;
      dflt = s._zod.def.defaultValue;
      s = s._zod.def.innerType;
    } else if (t === 'pipe') {
      s = s._zod.def.in;
    } else break;
  }
  const t = s._zod.def.type;
  const d = { required, default: dflt, kind: t };
  if (s.__image) d.kind = 'image';
  if (s.__reference) {
    d.kind = 'reference';
    d.ref = s.__reference;
  }
  if (t === 'number') d.int = s.format === 'safeint' || s.isInt === true;
  if (t === 'enum') d.values = s.options;
  if (t === 'object') d.shape = Object.fromEntries(Object.entries(s.shape).map(([k, v]) => [k, describe(v)]));
  if (t === 'array') d.element = describe(s._zod.def.element);
  return d;
}

/** Descriptor for a plain JSON value (settings.json). */
function describeJson(value) {
  if (Array.isArray(value)) return { required: true, kind: 'array', element: describeJson(value[0] ?? '') };
  if (value === null) return { required: false, kind: 'null' };
  if (typeof value === 'object')
    return {
      required: true,
      kind: 'object',
      shape: Object.fromEntries(Object.entries(value).map(([k, v]) => [k, describeJson(v)])),
    };
  if (typeof value === 'number') return { required: true, kind: 'number', int: Number.isInteger(value) };
  return { required: true, kind: typeof value };
}

// ---------------------------------------------------------------- comparison
const errors = [];
const warnings = [];
let checked = 0;

const WIDGETS = {
  string: ['string', 'text', 'markdown', 'richtext', 'uuid', 'select'],
  number: ['number'],
  boolean: ['boolean'],
  enum: ['select'],
  image: ['image'],
  reference: ['relation'],
  object: ['object'],
  array: ['list'],
};

function compareFields(where, shape, fields, { allowExtra = [] } = {}) {
  const byName = new Map(fields.map((f) => [f.name, f]));
  for (const [name, desc] of Object.entries(shape)) {
    const path = `${where}.${name}`;
    const field = byName.get(name);
    checked++;
    if (!field) {
      errors.push(`${path}: missing in CMS config`);
      continue;
    }
    const widget = field.widget ?? 'string';
    if (!WIDGETS[desc.kind]?.includes(widget)) {
      errors.push(`${path}: schema type "${desc.kind}" but CMS widget "${widget}"`);
      continue;
    }
    const cmsRequired = field.required !== false;
    if (desc.required && !cmsRequired && !where.startsWith('settings')) errors.push(`${path}: required in schema but optional in CMS`);
    if (!desc.required && desc.default === undefined && cmsRequired && desc.kind !== 'object' && !where.startsWith('settings'))
      warnings.push(`${path}: optional in schema but required in CMS`);
    if (desc.default !== undefined && !(Array.isArray(desc.default) && desc.default.length === 0)) {
      if (cmsRequired && field.default === undefined)
        errors.push(`${path}: schema default ${JSON.stringify(desc.default)} but CMS field is required without default`);
      else if (field.default !== undefined && JSON.stringify(field.default) !== JSON.stringify(desc.default))
        warnings.push(`${path}: default differs (schema ${JSON.stringify(desc.default)}, CMS ${JSON.stringify(field.default)})`);
    }
    if (desc.kind === 'number' && desc.int && field.value_type && field.value_type !== 'int')
      errors.push(`${path}: integer in schema, CMS value_type "${field.value_type}"`);
    if (desc.kind === 'enum') {
      const values = (field.options ?? []).map((o) => (typeof o === 'object' ? o.value : o));
      if (JSON.stringify([...values].sort()) !== JSON.stringify([...desc.values].sort()))
        errors.push(`${path}: enum ${JSON.stringify(desc.values)} vs CMS options ${JSON.stringify(values)}`);
      if (field.default !== undefined && !desc.values.includes(field.default)) errors.push(`${path}: invalid default`);
    }
    if (desc.kind === 'reference' && field.collection !== desc.ref)
      errors.push(`${path}: references "${desc.ref}" but relation points to "${field.collection}"`);
    if (desc.kind === 'object') compareFields(path, desc.shape, field.fields ?? []);
    if (desc.kind === 'array') {
      if (desc.element.kind === 'object') {
        if (!field.fields) errors.push(`${path}: list of objects needs \`fields\``);
        else compareFields(`${path}[]`, desc.element.shape, field.fields);
      } else if (field.fields || field.types) errors.push(`${path}: list of scalars must not use \`fields\``);
    }
  }
  for (const f of fields) {
    if (!(f.name in shape) && !allowExtra.includes(f.name)) errors.push(`${where}.${f.name}: in CMS config but not in schema`);
  }
}

const config = parse(process.env.CMS_CONFIG ? readFileSync(process.env.CMS_CONFIG, 'utf8') : read('public/admin/config.yml'), { merge: true });
// A comma inside an unquoted value of a YAML flow mapping (`{ hint: a, b }`)
// silently creates a key with a null value — catch that.
(function findNullKeys(node, where) {
  if (Array.isArray(node)) node.forEach((n, i) => findNullKeys(n, `${where}[${i}]`));
  else if (node && typeof node === 'object')
    for (const [k, v] of Object.entries(node)) {
      if (v === null) errors.push(`${where}.${k}: null value (unquoted comma in a flow mapping?)`);
      else findNullKeys(v, `${where}.${k}`);
    }
})(config, 'config');

const cms = new Map(config.collections.filter((c) => c.name).map((c) => [c.name, c]));
const cmsFiles = new Map();
for (const c of config.collections) for (const f of c.files ?? []) cmsFiles.set(f.name, { ...f, collection: c.name });

const bundleOptions = (name, c) => {
  const expected = { folder: `src/content/${name}`, path: '{{slug}}/index', media_folder: '', public_folder: '' };
  for (const [k, v] of Object.entries(expected))
    if (c[k] !== v) errors.push(`${name}: option ${k} should be ${JSON.stringify(v)}, got ${JSON.stringify(c[k])}`);
};

for (const [name, collection] of Object.entries(collections)) {
  const schema = typeof collection.schema === 'function' ? collection.schema({ image: imageStub }) : collection.schema;
  const shape = describe(schema).shape;
  if (collection.loader.kind === 'glob') {
    const c = cms.get(name);
    if (!c) {
      errors.push(`${name}: entry collection missing in CMS config`);
      continue;
    }
    bundleOptions(name, c);
    compareFields(name, shape, c.fields, { allowExtra: ['body'] });
  } else {
    const f = cmsFiles.get(name);
    if (!f) {
      errors.push(`${name}: file missing in CMS config`);
      continue;
    }
    if (`./${f.file}` !== collection.loader.path) errors.push(`${name}: file ${f.file} vs loader ${collection.loader.path}`);
    const items = f.fields.find((x) => x.name === 'items');
    if (!items || items.widget !== 'list') errors.push(`${name}: needs an \`items\` list field`);
    else {
      if (items.required === false) errors.push(`${name}: \`items\` must be required (an omitted key breaks the loader)`);
      compareFields(`${name}.items[]`, shape, items.fields);
    }
  }
}

// settings.json — shape inferred from the file itself
const settingsFile = cmsFiles.get('settings');
if (!settingsFile) errors.push('settings: file missing in CMS config');
else {
  const settings = describeJson(JSON.parse(read(settingsFile.file)));
  compareFields('settings', settings.shape, settingsFile.fields);
  const optional = [];
  const walk = (fields, where) => {
    for (const f of fields) {
      if (f.required === false) optional.push(`${where}.${f.name}`);
      if (f.fields && f.widget === 'object') walk(f.fields, `${where}.${f.name}`);
    }
  };
  walk(settingsFile.fields, 'settings');
  if (optional.length)
    console.log(`info  settings: optional (omitted when empty, must be optional in site.ts types): ${optional.join(', ')}`);
}

if (config.output?.omit_empty_optional_fields !== true)
  warnings.push('output.omit_empty_optional_fields should be true (zod rejects null for optional fields)');

// ---------------------------------------------------------------- JSON schema (optional)
if (process.argv.includes('--schema')) {
  const { default: Ajv } = await import('ajv');
  const res = await fetch('https://unpkg.com/@sveltia/cms/schema/sveltia-cms.json');
  const jsonSchema = await res.json();
  const ajv = new Ajv({ allErrors: true, strict: false });
  const validate = ajv.compile(jsonSchema);
  const clean = JSON.parse(JSON.stringify(config));
  if (!validate(clean)) {
    // anyOf/oneOf produce noisy branches; show the most specific messages only
    const seen = new Set();
    for (const e of validate.errors) {
      if (['anyOf', 'oneOf', 'if', 'const'].includes(e.keyword)) continue;
      const msg = `JSON schema: ${e.instancePath || '/'} ${e.message}${e.params?.additionalProperty ? ` (${e.params.additionalProperty})` : ''}`;
      if (!seen.has(msg)) seen.add(msg);
    }
    errors.push(...[...seen].slice(0, 30));
  } else console.log('JSON schema: OK');
}

for (const w of warnings) console.warn(`warn  ${w}`);
for (const e of errors) console.error(`error ${e}`);
console.log(`${checked} fields checked, ${errors.length} errors, ${warnings.length} warnings`);
process.exit(errors.length ? 1 : 0);
