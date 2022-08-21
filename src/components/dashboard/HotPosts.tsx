import { InferGetServerSidePropsType } from 'next';

import { SmallAddIcon } from '@chakra-ui/icons';
import { Box, Button, Grid, HStack, IconButton, Link, Skeleton, SkeletonCircle, VStack, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

import { ForumPosts } from '..';
import { trpc } from '../../utils/trpc';
import { HotIcon, PawLike } from '../icons';

import { Section } from './Section';

export const HotPosts: React.FC = () => {
	const { data: posts, isLoading: isPostsLoading } = trpc.useQuery(['forumPost.getHottest']);

	React.useEffect(() => {
		console.log(posts);
	}, [posts]);

	return (
		<Section title='Најжешки теми' icon={<HotIcon boxSize='32px' />}>
			<VStack gridRowGap={3}>
				{!isPostsLoading && posts !== undefined ?
					<ForumPosts posts={posts} /> :
					<Grid
						templateColumns='max-content auto'
						templateRows='max-content minmax(100px, auto) auto'
						w='full'
						bg='brand.150'
						padding={3}
						rounded='lg'
						columnGap={3}>
						<HStack gridColumn='2/3' gridRow='1/2'>
							<Skeleton
								height='1em'
								width='7ch' />
						</HStack>
						<SkeletonCircle size='8' />
						<Grid placeSelf='center' placeItems='center' rowGap={2}>
							<Skeleton
								height='1em'
								width='3ch' />
							<Skeleton
								height='1.5em'
								width='3ch' />
						</Grid>
						<VStack gridColumn='2/3' gridRow='2/3' alignItems='normal'>
							<Skeleton
								height='1.5em'
								width='full' />
							<Box pos='relative'>
								<Skeleton
									height='5em'
									width='full' />
							</Box>
						</VStack>
					</Grid>
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
