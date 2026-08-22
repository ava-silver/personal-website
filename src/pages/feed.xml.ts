import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  return rss({
    title: 'Ava Silver',
    description:
      "i'm ava silver (she/her). welcome to my corner of the internet!",
    site: context.site!,
    items: posts.map(({ id, data }) => ({
      title: data.title,
      description: data.description,
      link: `/blog/${id}/`,
      guid: `${context.site}blog/${id}`,
      pubDate: data.date,
    })),
  });
}
