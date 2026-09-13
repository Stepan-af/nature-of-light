/*
 * schema.org builders for site-wide structured data (JSON-LD).
 *
 * The site graph (rendered on every page by <SiteSchema />) contains one
 * HomeAndConstructionBusiness node — a LocalBusiness and an Organization at the
 * same time — and one WebSite node. Page schemas should reference the business
 * by id instead of repeating it:
 *
 *   import { ORG_ID } from '@/lib/schema';
 *   { '@type': 'Service', provider: { '@id': ORG_ID }, … }
 *
 * Only facts from settings.json are used: no ratings/reviews markup here
 * (Google ignores self-serving LocalBusiness ratings), no invented prices.
 */
import { settings } from '@/lib/site';

export type JsonLdNode = Record<string, unknown>;

/** Site origin with a trailing slash, e.g. "https://prirodasveta.ru/". */
export const SITE_URL = new URL('/', import.meta.env.SITE ?? 'https://prirodasveta.ru').href;
/** `@id` of the business / organization node. */
export const ORG_ID = `${SITE_URL}#organization`;
/** `@id` of the WebSite node. */
export const WEBSITE_ID = `${SITE_URL}#website`;

const absolute = (path: string) => new URL(path, SITE_URL).href;

/** Optional settings fields may be absent in settings.json (the CMS omits empty optional values). */
const legal = settings.legal as { company: string; fullName?: string; inn?: string; ogrn?: string };

const DAY_CODES: Record<string, string> = {
  пн: 'Monday',
  вт: 'Tuesday',
  ср: 'Wednesday',
  чт: 'Thursday',
  пт: 'Friday',
  сб: 'Saturday',
  вс: 'Sunday',
};
const WEEK = Object.values(DAY_CODES);

const pad = (time: string) => (time.length === 4 ? `0${time}` : time);

/**
 * "Пн–Пт 9:00–19:00, Сб 10:00–16:00" → OpeningHoursSpecification[].
 * Understands day ranges (Пн–Пт), lists (Сб, Вс), «ежедневно» / «без выходных».
 * Returns [] if the string can't be parsed, so nothing wrong is published.
 */
export function parseOpeningHours(hours: string): JsonLdNode[] {
  const specs: JsonLdNode[] = [];
  let pendingDays = ''; // "Сб, Вс 10:00–16:00" is split on the comma: carry "сб" over
  const normalized = hours.toLowerCase().replace(/\s*[–—-]\s*/g, '–');
  for (const rawPart of normalized.split(/[;,]/)) {
    const part = rawPart.trim();
    if (!part) continue;
    const time = part.match(/(\d{1,2}:\d{2})–(\d{1,2}:\d{2})/);
    if (!time) {
      if (/выходной/.test(part)) continue;
      pendingDays += ` ${part}`;
      continue;
    }
    const daysText = `${pendingDays} ${part.slice(0, time.index)}`.trim();
    pendingDays = '';

    let days: string[] = [];
    if (/ежедневно|без выходных|круглосуточно/.test(daysText)) {
      days = WEEK;
    } else {
      for (const token of daysText.split(/[\s.]+/).filter(Boolean)) {
        if (token === 'и') continue;
        const range = token.match(/^([а-я]{2})–([а-я]{2})$/);
        if (range) {
          const from = WEEK.indexOf(DAY_CODES[range[1]!] ?? '');
          const to = WEEK.indexOf(DAY_CODES[range[2]!] ?? '');
          if (from === -1 || to === -1 || to < from) return [];
          days.push(...WEEK.slice(from, to + 1));
        } else {
          const day = DAY_CODES[token];
          if (!day) return [];
          days.push(day);
        }
      }
    }
    if (days.length === 0) return [];
    specs.push({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: days,
      opens: pad(time[1]!),
      closes: pad(time[2]!),
    });
  }
  return specs;
}

/** Profile links only (placeholder links like "https://t.me/" without a path are skipped). */
function sameAs(): string[] {
  return [settings.social.telegram, settings.social.vk]
    .filter((href): href is string => typeof href === 'string' && href.length > 0)
    .filter((href) => {
      try {
        return new URL(href).pathname.replace(/\//g, '').length > 0;
      } catch {
        return false;
      }
    });
}

/** Organization-level properties (shared by `organization()` and `localBusiness()`). */
function organizationProps(): JsonLdNode {
  const props: JsonLdNode = {
    '@id': ORG_ID,
    name: settings.siteName,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: absolute('/icon-512.png'),
      width: 512,
      height: 512,
    },
    description: settings.description,
    email: settings.email,
    telephone: settings.phone,
    foundingDate: String(settings.foundedYear),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: settings.phone,
      email: settings.email,
      areaServed: 'RU',
      availableLanguage: 'Russian',
    },
  };
  if (legal.fullName || legal.company) props.legalName = legal.fullName || legal.company;
  if (legal.inn) props.taxID = legal.inn;
  const links = sameAs();
  if (links.length) props.sameAs = links;
  return props;
}

/** Plain Organization node (use when a LocalBusiness type is not appropriate). */
export function organization(): JsonLdNode {
  return { '@context': 'https://schema.org', '@type': 'Organization', ...organizationProps() };
}

/** HomeAndConstructionBusiness (LocalBusiness) node for the company. */
export function localBusiness(): JsonLdNode {
  const node: JsonLdNode = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    ...organizationProps(),
    image: absolute('/og-default.jpg'),
    address: {
      '@type': 'PostalAddress',
      streetAddress: settings.address.street,
      addressLocality: settings.address.city || 'Москва',
      addressCountry: 'RU',
    },
    areaServed: [
      { '@type': 'City', name: 'Москва' },
      { '@type': 'AdministrativeArea', name: 'Московская область' },
    ],
  };
  const hours = parseOpeningHours(settings.hours ?? '');
  if (hours.length) node.openingHoursSpecification = hours;
  return node;
}

/** WebSite node (no SearchAction: the site has no search). */
export function webSite(): JsonLdNode {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: settings.siteName,
    description: settings.description,
    inLanguage: 'ru-RU',
    publisher: { '@id': ORG_ID },
  };
}

/** Site-wide graph rendered by <SiteSchema />. */
export function siteGraph(): JsonLdNode {
  const strip = ({ '@context': _context, ...rest }: JsonLdNode) => rest;
  return {
    '@context': 'https://schema.org',
    '@graph': [strip(localBusiness()), strip(webSite())],
  };
}
