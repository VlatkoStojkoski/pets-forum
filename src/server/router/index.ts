// src/server/router/index.ts
import superjson from 'superjson';

import { createRouter } from './context';
import { exampleRouter } from './example';
import { forumPost } from './forumPost';
import { protectedExampleRouter } from './protected-example-router';

export const appRouter = createRouter()
	.transformer(superjson)
	.merge('forumPost.', forumPost);

// export type definition of API
export type AppRouter = typeof appRouter;
