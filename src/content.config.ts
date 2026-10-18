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

const specRow = z.object({ label: z.string(), value: z.string() });

/*
 * Product page sections below `seo` are all optional (decided by the client):
 * a missing/empty section is simply not rendered. See src/components/product/.
 */
const products = defineCollection({
  loader: bundle('products'),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: reference('categories'),
      material: z.string(),
      /** Starting price in rubles ("от 30 000 ₽"); empty → «Цена по согласованию». */
      priceFrom: z.number().int().nonnegative().optional(),
      availability: z.enum(['order', 'stock']).default('order'),
      image: image(),
      imageAlt: z.string(),
      gallery: z.array(z.object({ image: image(), alt: z.string() })).default([]),
      specs: z.array(specRow).default([]),
      order: z.number().default(0),
      draft: z.boolean().default(false),
      seo,

      /** Short text under the title (falls back to the Markdown body). */
      lead: z.string().optional(),
      /** Rows in the purchase block; falls back to material + `specs`. */
      keySpecs: z.array(specRow).optional(),
      /** Dark band with 3–4 icon cards. */
      advantages: z
        .object({
          title: z.string(),
          items: z.array(
            z.object({
              icon: z.enum(['sun', 'project', 'wrench', 'shield']),
              title: z.string(),
              text: z.string(),
            }),
          ),
        })
        .optional(),
      /** Photo + text blocks, alternating image left / right. */
      story: z
        .array(
          z.object({
            image: image(),
            imageAlt: z.string(),
            title: z.string(),
            text: z.string(),
            quote: z.string().optional(),
            link: z.object({ label: z.string(), href: z.string() }).optional(),
            stats: z.array(z.object({ value: z.string(), label: z.string() })).optional(),
          }),
        )
        .default([]),
      /** «Продумано до каждой детали»: intro + photos on the left, spec table on the right. */
      details: z
        .object({
          title: z.string(),
          text: z.string().optional(),
          image: image().optional(),
          imageAlt: z.string().optional(),
          photos: z.array(z.object({ image: image(), alt: z.string() })).optional(),
          rows: z.array(specRow),
        })
        .optional(),
      /** «От эскиза до готового пространства»: photo + numbered steps. */
      process: z
        .object({
          title: z.string(),
          image: image().optional(),
          imageAlt: z.string().optional(),
          steps: z.array(z.object({ title: z.string(), text: z.string().optional() })),
        })
        .optional(),
      /** Product FAQ (answers in Markdown); emits FAQPage JSON-LD. */
      faq: z
        .object({
          title: z.string(),
          intro: z.string().optional(),
          items: z.array(z.object({ question: z.string(), answer: z.string() })),
        })
        .optional(),
      /** Closing banner: full-width photo with a large title. */
      finale: z
        .object({
          title: z.string(),
          image: image(),
          imageAlt: z.string(),
        })
        .optional(),
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
