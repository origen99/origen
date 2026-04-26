import { defineCollection, z } from "astro:content";

const home = defineCollection({
  type: "content",
  schema: z.object({
    id: z.string(),
    title: z.string().min(10).max(80),
    purpose_summary: z.string().min(80).max(300),
    tone_profile: z.literal("neutral-curioso-analitico"),
    version: z.string(),
    updated_at: z.string(),
    sections: z
      .array(
        z.object({
          section_type: z.enum(["identidad", "proposito", "principios", "explorar", "contribuir"]),
          heading: z.string(),
          body: z.string(),
          cta_label: z.string().optional(),
          cta_target: z.string().optional(),
          order: z.number().int().positive()
        })
      )
      .min(4)
  })
});

const docs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional()
  })
});

const tutorials = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional()
  })
});

const howTo = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional()
  })
});

const reference = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional()
  })
});

const explanation = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional()
  })
});

export const collections = {
  home,
  docs,
  tutorials,
  "how-to": howTo,
  reference,
  explanation
};
