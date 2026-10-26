import { defineCollection } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { z } from 'astro/zod';

const examSchema = z.enum(['medicine-3', 'medicine-4', 'medicine-5', 'medicine-6']);

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        exam: examSchema.optional(),
        specialty: z.string().optional(),
        tags: z.array(z.string()).default([]),
        relatedSpecialties: z.array(z.string()).default([]),
        relatedLiterature: z.array(z.string()).default([]),
        relatedQuestions: z.array(z.string()).default([]),
        sources: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
      }),
    }),
  }),
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
