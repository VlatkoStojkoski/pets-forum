import type { NextPage } from 'next';

import { Heading, VStack } from '@chakra-ui/react';
import Head from 'next/head';

import { ForumPosts, ForumPostSkeleton } from '../../components';
import { trpc } from '../../utils/trpc';

const Forum: NextPage = () => {
	const { data: posts } = trpc.useQuery(['forumPost.getAll']);

	return (
		<>
			<Head>
				<title>Pets Forum | Forum</title>
			</Head>

			<Heading textAlign='center' fontSize='6xl' mb={6}>
				Форум
			</Heading>
			<VStack gridRowGap={3} px={5} maxW='600px' w='100%' mx='auto'>
				{
					posts?.length ?
						<ForumPosts posts={posts} /> :
						[...Array(2)].map((_, i) => <ForumPostSkeleton key={i} />)
				}
			</VStack>
		</>
	);
};

export default Forum;