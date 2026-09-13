import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

/** Published projects sorted by `order` (used for the list and prev/next links). */
export const getProjects = async () =>
  (await getCollection('projects', (p) => !p.data.draft)).sort(
    (a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title, 'ru'),
  );

export const projectHref = (project: Project) => `/portfolio/${project.id}/`;

export const segmentLabels: Record<Project['data']['segment'], string> = {
  residential: 'Жилые дома',
  commercial: 'Коммерческие',
};

export { bentoTall } from './bento';
