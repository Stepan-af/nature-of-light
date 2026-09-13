#!/usr/bin/env node
/**
 * Deletes files in dist/_astro that no built file references.
 *
 * Astro emits every image variant and the original of every imported asset
 * (e.g. SVGs that are inlined as components), even when no page links to them.
 * They'd never be requested, but each one costs an upload on FTP deploys.
 *
 * Usage: node scripts/prune-unused-assets.mjs [distDir]   (add --dry-run to only list)
 */
import { readdirSync, readFileSync, statSync, unlinkSync } from 'node:fs';
import { join, relative } from 'node:path';

const dist = process.argv.find((a, i) => i > 1 && !a.startsWith('--')) ?? 'dist';
const dryRun = process.argv.includes('--dry-run');
const assetsDir = join(dist, '_astro');
const TEXT = /\.(html|css|js|mjs|json|xml|txt|webmanifest|svg|php|yml)$/i;

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)]));

const files = walk(dist);
const assets = files.filter((f) => f.startsWith(assetsDir + '/') && !relative(assetsDir, f).includes('/'));

// Everything that could reference an asset: all text files outside the asset
// being checked (CSS/JS inside _astro can reference fonts and images too).
const corpus = files
  .filter((f) => TEXT.test(f))
  .map((f) => ({ f, text: readFileSync(f, 'utf8') }));

let removed = 0;
let bytes = 0;
for (const asset of assets) {
  const name = asset.slice(assetsDir.length + 1);
  const used = corpus.some(({ f, text }) => f !== asset && text.includes(name));
  if (used) continue;
  bytes += statSync(asset).size;
  removed += 1;
  if (dryRun) console.log(`unused: ${name}`);
  else unlinkSync(asset);
}

console.log(
  `[prune-unused-assets] ${dryRun ? 'would remove' : 'removed'} ${removed} of ${assets.length} files in ${assetsDir} (${(bytes / 1048576).toFixed(1)} MB)`,
);
