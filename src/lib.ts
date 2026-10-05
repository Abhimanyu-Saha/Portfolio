import { getCollection } from 'astro:content';

/** Published case studies, in display order. Drafts are only visible in `npm run dev`. */
export async function getWork() {
  const all = await getCollection('work', ({ data }) => import.meta.env.DEV || !data.draft);
  return all.sort((a, b) => a.data.order - b.data.order || b.data.year - a.data.year);
}
