import { getCollection, type CollectionEntry } from 'astro:content';

export type Category = CollectionEntry<'categories'>;
export type Product = CollectionEntry<'products'>;

const byOrder = <T extends { data: { order: number; title: string } }>(a: T, b: T) =>
  a.data.order - b.data.order || a.data.title.localeCompare(b.data.title, 'ru');

export const getCategories = async () => (await getCollection('categories')).sort(byOrder);

/** Published products, sorted by `order`; optionally only one category. */
export const getProducts = async (categoryId?: string) =>
  (await getCollection('products', (p) => !p.data.draft && (!categoryId || p.data.category.id === categoryId))).sort(
    byOrder,
  );

export const productHref = (product: Product) => `/catalog/${product.data.category.id}/${product.id}/`;
export const categoryHref = (category: Category) => `/catalog/${category.id}/`;

export const availabilityLabel: Record<Product['data']['availability'], string> = {
  order: 'Под заказ',
  stock: 'В наличии',
};

export const availabilitySchema: Record<Product['data']['availability'], string> = {
  order: 'https://schema.org/MadeToOrder',
  stock: 'https://schema.org/InStock',
};
