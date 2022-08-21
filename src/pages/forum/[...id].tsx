import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';

import { Grid, VStack } from '@chakra-ui/react';
import Head from 'next/head';

import { ForumCommentProperties, ForumComments, forumCommentSelect, ForumPost } from '../../components';
import { prisma } from '../../server/db/client';
import { ForumPostProperties, forumPostSelect } from '../../server/router/forumPost';
import { useLikeableState } from '../../utils/hooks';

const Forum: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
	post,
	comments,
}) => {
	const { handleLike, checkLiked } = useLikeableState();

	return (
		<>
			<Head>
				<title>Pets Forum | {post?.title || 'Forum post'}</title>
				<meta name="og:title" content={post?.title || 'Forum post'} />
				<meta name="description" content={post?.content || 'Forum post content'} />
				<meta name="og:description" content={post?.content || 'Forum post content'} />
			</Head>

			<Grid px={7} maxW='700px' mx='auto'>
				{post && (
					<ForumPost
						config={post}
						showComments={false}
						showAll={true}
						onLike={handleLike}
						liked={checkLiked(post.id)}
						mb={8}
					/>
				)}
				{comments && (
					<VStack gridRowGap={3}>
						<ForumComments comments={comments} />
					</VStack>
				)}
			</Grid>
		</>
	);
};

interface ServerSideProps {
	post: ForumPostProperties | null;
	comments: ForumCommentProperties[] | null;
}

export const getServerSideProps: GetServerSideProps<ServerSideProps, { id: [string] }> =
	async ({ params }) => {
		if (!params?.id[0])
			return {
				props: {
					post: null,
					comments: null,
				},
			};

		const postId = params?.id[0];

		let post = await prisma?.forumPost.findFirst({
			where: {
				id: postId,
			},
			select: forumPostSelect,
		}) || null;

		let comments = await prisma?.forumComment.findMany({
			where: {
				forumPostId: postId,
			},
			select: forumCommentSelect,
			orderBy: {
				date: 'desc',
			},
		}) || null;

		return {
			props: {
				post,
				comments,
			},
		};
	};

export default Forum;