import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';

import { Grid, Heading, VStack } from '@chakra-ui/react';

import { ForumCommentProperties, ForumComments, forumCommentSelect, ForumPost, ForumPostProperties, forumPostSelect } from '../../components';
import { useLikeableState } from '../../utils/hooks';

const Forum: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
	post,
	comments,
}) => {
	const { handleLike, checkLiked } = useLikeableState();

	return (
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

		let post = await prisma?.forumPost.findFirst({
			where: {
				id: params?.id[0],
			},
			select: forumPostSelect,
		}) || null;

		let comments = await prisma?.forumComment.findMany({
			where: {
				id: params?.id[0],
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