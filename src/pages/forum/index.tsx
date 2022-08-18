import type { InferGetServerSidePropsType, NextPage } from 'next';

import { Heading, VStack } from '@chakra-ui/react';

import { ForumPosts, forumPostSelect } from '../../components';

const Forum: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
	posts,
}) => {
	return (
		<>
			<Heading textAlign='center' fontSize='6xl' mb={6}>
				Форум
			</Heading>
			<VStack gridRowGap={3} px={5} maxW='600px' w='100%' mx='auto'>
				{
					posts?.length ?
						<ForumPosts posts={posts} /> :
						<></>
				}
			</VStack>
		</>
	);
};

export const getServerSideProps = async () => {
	const posts = await prisma?.forumPost.findMany({
		select: forumPostSelect,
		orderBy: [
			{
				date: 'desc',
			},
		],
	});

	return {
		props: {
			posts,
		},
	};
};

export default Forum;