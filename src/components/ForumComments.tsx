import React, { useState } from 'react';

import { ForumComment } from '../components';
import { useLikeableState } from '../utils/hooks';
import { objectWithoutProperties } from '../utils/tools';

import type { ForumCommentProperties } from './ForumComment';

export interface ForumCommentsProps {
	comments: ForumCommentProperties[];
}

export const ForumComments: React.FC<ForumCommentsProps> = ({
	comments,
}) => {
	const { handleLike, checkLiked } = useLikeableState();

	return (
		<>
			{(comments.length &&
				comments.map((comment, commentI) => {
					return (
						<ForumComment config={comment} key={comment.id} onLike={handleLike} liked={checkLiked(comment.id)} />
					);
				})) ||
				null}
		</>
	);
};

// export const getServerSideProps = async () => {
// 	const comments = await prisma?.forumComment.findMany({
// 		orderBy: {
// 			date: 'asc',
// 		},
// 	});

// 	return {
// 		props: {
// 			comments,
// 		},
// 	};
// }; 