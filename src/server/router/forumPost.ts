import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { getPreviousWeek } from '../../utils/tools';

import { createRouter } from './context';

export const forumPostSelect = {
	title: true,
	author: true,
	date: true,
	content: true,
	likes: true,
	id: true,
};

export type ForumPostProperties = Prisma.ForumPostGetPayload<{
	select: typeof forumPostSelect;
}>

export const forumPost = createRouter()
	.query('getAll', {
		async resolve({ ctx }) {
			return await ctx.prisma.forumPost.findMany({
				select: forumPostSelect,
				orderBy: [
					{
						date: 'desc',
					},
				],
			});
		},
	})
	.query('getHottest', {
		input: z.object({
			batchSize: z.number().optional(),
		}).optional(),
		async resolve({ ctx, input }) {
			const asyncTimeout = (ms: number) => new Promise((res, rej) => setTimeout(() => res(true), ms));

			await asyncTimeout(3000);

			return await ctx.prisma.forumPost.findMany({
				take: input?.batchSize || 2,
				select: forumPostSelect,
				orderBy: [
					{
						likes: 'desc',
					},
				],
				where: {
					date: {
						gte: getPreviousWeek(new Date()),
					},
				},
			});
		},
	});
