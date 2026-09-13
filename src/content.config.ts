import { defineCollection, reference } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

/*
 * All site content lives in src/content as plain files, edited either by hand
 * or through Sveltia CMS (public/admin/config.yml). The CMS config must mirror
 * these schemas — change both together.
 *
 * Folder collections are "page bundles": src/content/<collection>/<slug>/index.md
 * with images stored next to index.md and referenced relatively (./cover.jpg).
 * Singletons are JSON files in src/content/data with an `items` array.
 */

const seo = z
  .object({
    title: z.string().optional(),
    description: z.string().optional(),
  })
  .optional();

const bundle = (name: string) => glob({ base: `./src/content/${name}`, pattern: '*/index.md' });

/** Reads `{ items: [...] }` singleton JSON written by the CMS. */
const items = (path: string) =>
  file(path, { parser: (text) => (JSON.parse(text) as { items?: Record<string, unknown>[] }).items ?? [] });

const categories = defineCollection({
  loader: bundle('categories'),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** Short text for the category card on the home page. */
      summary: z.string(),
      image: image(),
      imageAlt: z.string(),
      order: z.number().default(0),
      seo,
    }),
});

const products = defineCollection({
  loader: bundle('products'),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: reference('categories'),
      material: z.string(),
      /** Starting price in rubles ("от 45 000 ₽"). */
      priceFrom: z.number().int().nonnegative(),
      availability: z.enum(['order', 'stock']).default('order'),
      image: image(),
      imageAlt: z.string(),
      gallery: z.array(z.object({ image: image(), alt: z.string() })).default([]),
      specs: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
      order: z.number().default(0),
      draft: z.boolean().default(false),
      seo,
    }),
});

const projects = defineCollection({
  loader: bundle('projects'),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: reference('categories'),
      /** Label shown on cards, e.g. «Зимний сад», «Козырёк», «Терраса». */
      badge: z.string(),
      location: z.string(),
      price: z.number().int().nonnegative(),
      area: z.string(),
      city: z.string(),
      year: z.number().int(),
      installDuration: z.string(),
      cover: image(),
      coverAlt: z.string(),
      gallery: z.array(z.object({ image: image(), alt: z.string() })).default([]),
      /** Portfolio filter: header dropdown links to /portfolio/?type=residential|commercial. */
      segment: z.enum(['residential', 'commercial']),
      /** Show in the dark "Более 840 проектов" block on the home page. */
      featured: z.boolean().default(false),
      order: z.number().default(0),
      draft: z.boolean().default(false),
      seo,
    }),
});

const reviews = defineCollection({
  loader: items('./src/content/data/reviews.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    object: z.string(),
    rating: z.number().min(1).max(5).default(5),
    text: z.string(),
  }),
});

const faq = defineCollection({
  loader: items('./src/content/data/faq.json'),
  schema: z.object({
    id: z.string(),
    question: z.string(),
    /** Markdown. */
    answer: z.string(),
  }),
});

const serviceSteps = defineCollection({
  loader: items('./src/content/data/service-steps.json'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    duration: z.string(),
  }),
});

const extraServices = defineCollection({
  loader: items('./src/content/data/extra-services.json'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string().optional(),
  }),
});

const advantages = defineCollection({
  loader: items('./src/content/data/advantages.json'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    text: z.string(),
    icon: z.enum(['measure', 'factory', 'install', 'warranty']),
  }),
});

export const collections = {
  categories,
  products,
  projects,
  reviews,
  faq,
  serviceSteps,
  extraServices,
  advantages,
};
