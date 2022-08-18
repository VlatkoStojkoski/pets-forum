import React, { useState, useEffect } from 'react';

import { useLikeableState } from '../utils/hooks';

import { ForumPostProperties } from './ForumPost';

import { ForumPost } from './index';

export interface ForumPostsProps {
	posts: ForumPostProperties[];
}

export const ForumPosts: React.FC<ForumPostsProps> = ({ posts }) => {
	const { handleLike, checkLiked } = useLikeableState();

	return (
		<>
			{(posts.length &&
				posts.map((post, postI) => {
					return <ForumPost config={post} key={post.id} onLike={handleLike} liked={checkLiked(post.id)} />;
				})) ||
				null}
		</>
	);
};
