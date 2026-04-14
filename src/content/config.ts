import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    cover: image().refine((img) => img.width >= 1080, {
      message: "¡La imagen de portada debe tener al menos 1080 píxeles de ancho!",
      
    }),
    coverAlt: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};

// import { defineCollection, z } from 'astro:content';

// const blog = defineCollection({
//   schema: z.object({
//     title: z.string(),
//     description: z.string(),
//     pubDate: z.date(),
//     image: z.string().optional(),
//     tags: z.array(z.string()).default([]),
//   }),
// });

// export const collections = {
//   blog,
// };