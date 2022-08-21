import { InferGetServerSidePropsType } from 'next';

import { Button, Link, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

import { ForumPosts } from '..';
import { trpc } from '../../utils/trpc';
import { HotIcon } from '../icons';

import { Section } from './Section';

export const HotPosts: React.FC = () => {
	const { data: posts, isLoading: isPostsLoading } = trpc.useQuery(['forumPost.getHottest']);

	React.useEffect(() => {
		console.log(posts);
	}, [posts]);

	return (
		<Section title='Најжешки теми' icon={<HotIcon boxSize='32px' />}>
			<VStack gridRowGap={3}>
				<Skeleton
					height='40px'
					isLoaded={!isPostsLoading}
					bg='green.500'
					color='white'
					fadeDuration={1}
				/>
				{!isPostsLoading && posts !== undefined ?
					<ForumPosts posts={posts} /> :
					null
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
