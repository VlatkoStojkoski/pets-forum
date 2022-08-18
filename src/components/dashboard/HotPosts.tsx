import { InferGetServerSidePropsType } from 'next';

import { Button, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

import { ForumPostProperties, ForumPosts } from '..';
import { HotIcon } from '../icons';

import { Section } from './Section';

interface HotPostsProps {
	posts: ForumPostProperties[];
};

export const HotPosts: React.FC<HotPostsProps> = ({ posts }) => {
	return (
		<Section title='Најжешки теми' icon={<HotIcon boxSize='32px' />}>
			<VStack gridRowGap={3}>
				<ForumPosts posts={posts} />
				<Link href='/forum'>
					<Button colorScheme='brand__brown'>Видете повеќе...</Button>
				</Link>
			</VStack>
		</Section>
	);
};
