import { InferGetServerSidePropsType, NextPage } from 'next';

import { Box, Stack } from '@chakra-ui/react';

import { forumPostSelect } from '../components';
import { HotPosts } from '../components/dashboard/HotPosts';
import { QuickAccess } from '../components/dashboard/QuickAccess';
import { WelcomeSection } from '../components/dashboard/WelcomeSection';
import { prisma } from '../server/db/client';
import { getPreviousDay } from '../utils/tools';

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
	const currDateTime = new Date();

	const posts = await prisma?.forumPost.findMany({
		take: 2,
		select: forumPostSelect,
		orderBy: [
			{
				likes: 'desc',
			},
		],
		where: {
			date: {
				gte: getPreviousDay(currDateTime),
			},
		},
	});

	return {
		props: {
			posts,
		},
	};
};

export default Dashboard;