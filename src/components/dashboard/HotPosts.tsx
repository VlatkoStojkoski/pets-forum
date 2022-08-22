
import { Box, Button, Grid, HStack, Link, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

import { ForumPosts, ForumPostSkeleton } from '..';
import { trpc } from '../../utils/trpc';
import { HotIcon } from '../icons';

import { Section } from './Section';

export const HotPosts: React.FC = () => {
	const { data: posts, isLoading: isPostsLoading } = trpc.useQuery(['forumPost.getHottest']);

	return (
		<Section title='Најжешки теми' icon={<HotIcon boxSize='32px' />}>
			<VStack gridRowGap={3}>
				{!isPostsLoading && posts !== undefined ?
					<ForumPosts posts={posts} /> :
					<ForumPostSkeleton />
				}
				<NextLink href='/forum' passHref>
					<Link>
						<Button colorScheme='brand__brown'>Видете повеќе...</Button>
					</Link>
				</NextLink>
			</VStack>
		</Section>
	);
};
