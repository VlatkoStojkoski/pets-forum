import React, { useEffect, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

import { objectWithoutProperties } from './tools';

export const useObserveHeight = (
	componentRef: React.RefObject<HTMLElement>
) => {
	const [componentHeight, setComponentHeight] = useState(0);

	useEffect(() => {
		if (componentRef.current) {
			new ResizeObserver(() =>
				setComponentHeight(componentRef.current?.offsetHeight || 0)
			).observe(componentRef.current);
		}
	}, [componentRef]);

	return componentHeight;
};

export function useLikeableState() {
	const [likedObjects, setLikedObjects] = useState<{
		[key: string]: true
	}>({});

	const handleLike = (id: string) => {
		const likedAlready = likedObjects[id];

		if (!likedAlready) {
			return setLikedObjects({ ...likedObjects, [id]: true });
		}

		setLikedObjects(objectWithoutProperties(likedObjects, [id]));
	};

	const checkLiked = (id: string) =>
		!!likedObjects[id];

	return { likedObjects, setLikedObjects, handleLike, checkLiked };
};
