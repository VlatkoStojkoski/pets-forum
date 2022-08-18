import { SmallAddIcon } from '@chakra-ui/icons';
import {
	Avatar,
	BoxProps,
	Grid,
	HStack,
	IconButton,
	Text,
	VStack
} from '@chakra-ui/react';
import { Prisma } from '@prisma/client';
import millify from 'millify';
import Link from 'next/link';
import React from 'react';

import { PawLike } from '../components/icons';

export type ForumCommentProperties = Prisma.ForumCommentGetPayload<{
	select: {
		author: true;
		content: true;
		likes: true;
		id: true;
	}
}>

export interface ForumCommentProps extends BoxProps {
	config: ForumCommentProperties;
	onLike(id: string): void;
	liked: boolean;
}

export const ForumComment: React.FC<ForumCommentProps> = ({
	config: {
		author: { displayName, username, avatar },
		content,
		likes,
		id,
	},
	onLike,
	liked,
	...props
}) => {
	return (
		<Grid
			templateColumns='max-content auto'
			templateRows='max-content minmax(100px, auto) auto'
			w='100%'
			bg='brand.200'
			padding={3}
			rounded='lg'
			columnGap={3}
			{...props}
		>
			<HStack gridColumn='2/3' gridRow='1/2'>
				<Link href={`/${username}`}>
					<Text
						my='auto'
						w='max-content'
						noOfLines={1}
						maxW={['14ch', '15ch', '100%']}
						fontWeight='550'
					>
						{displayName}
					</Text>
				</Link>
				<SmallAddIcon bg='brand.800' color='bg' rounded='50%' my='auto' />
			</HStack>
			<Avatar
				gridColumn='1/2'
				gridRow='1/2'
				name={displayName}
				src={avatar}
				placeSelf='center'
				size='sm'
			/>
			<Grid placeSelf='center' placeItems='center'>
				<Text
					textAlign='center'
					fontWeight={liked ? '700' : 'normal'}
					fontSize='sm'
				>
					{millify(likes, {
						precision: 1,
						decimalSeparator: '.',
					})}
				</Text>
				<IconButton
					aria-label='Like button'
					variant='unstyled'
					_focus={{ outline: 'none' }}
					onClick={() => onLike(id)}
					size='sm'
					icon={
						<PawLike
							gridColumn='1/2'
							gridRow='2/3'
							boxSize='1.625rem'
							color={`${liked ? 'accent' : 'gray'}.400`}
							_hover={{
								color: `${liked ? 'accent' : 'gray'}.500`,
							}}
							placeSelf='center'
						/>
					}
				/>
			</Grid>
			<VStack gridColumn='2/3' gridRow='2/3' alignItems='normal'>
				<Text fontSize='sm'>{content}</Text>
			</VStack>
		</Grid>
	);
};
