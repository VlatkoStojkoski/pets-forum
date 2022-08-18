import { InferGetServerSidePropsType, NextPage } from 'next';

import { Box, Stack } from '@chakra-ui/react';

import { HotPosts } from '../../components/dashboard/HotPosts';
import { QuickAccess } from '../../components/dashboard/QuickAccess';
import { WelcomeSection } from '../../components/dashboard/WelcomeSection';

const Dashboard: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
	posts,
}) => {
	return (
		<Stack px={7} pb={10} gridRowGap={7} mx='auto' maxW='600px'>
			<WelcomeSection />
			<Box>
				<QuickAccess />
			</Box>
			{
				posts?.length ?
					<HotPosts posts={posts} /> :
					<></>
			}
		</Stack>
	);
};

export const getServerSideProps = async () => {
	const posts = await prisma?.forumPost.findMany({
		select: {
			title: true,
			author: true,
			content: true,
			likes: true,
			id: true,
		},
		orderBy: [
			{
				likes: 'desc',
			},
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

export default Dashboard;