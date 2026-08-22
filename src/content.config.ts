import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({
    pattern: '*.md',
    base: './src/content/blog',
    // strip the YYYY-MM-DD- prefix and .md extension for URLs like /blog/coming-out
    generateId: ({ entry }) =>
      entry
        .replace(/^\d{4}-\d{2}-\d{2}-/, '')
        .replace(/\.md$/, ''),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
    }),
  }),
});

export const collections = { blog };
