import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			artist: z.string(),
			publishDate: z.coerce.date(),
			photo: z.string(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
			client: z.string().optional(),
			size:z.string(),
			artistSite: z.string(),
			link: z.string(),
			password: z.string().optional(),

		}),
	}),
};
