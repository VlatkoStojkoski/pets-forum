import { InferGetServerSidePropsType, NextPage } from 'next';

import { Box, Stack } from '@chakra-ui/react';
import Head from 'next/head';

import { HotPosts } from '../components/dashboard/HotPosts';
import { QuickAccess } from '../components/dashboard/QuickAccess';
import { WelcomeSection } from '../components/dashboard/WelcomeSection';

const Dashboard: NextPage = () => {
	return (
		<>
			<Head>
				<title>Pets Forum | Dashboard</title>
			</Head>
			<Stack px={7} pb={10} gridRowGap={7} mx='auto' maxW='600px'>
				<WelcomeSection />
				<Box>
					<QuickAccess />
				</Box>
				<HotPosts />
			</Stack>
		</>
	);
};

export default Dashboard;