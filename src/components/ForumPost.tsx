import { ChatIcon, SmallAddIcon } from '@chakra-ui/icons';
import {
	Avatar,
	Box,
	BoxProps,
	Grid,
	Heading,
	HStack,
	IconButton,
	Link,
	Text,
	VStack
} from '@chakra-ui/react';
import millify from 'millify';
import NextLink from 'next/link';
import React from 'react';

import { PawLike } from '../components/icons';
import { ForumPostProperties } from '../server/router/forumPost';

export interface ForumPostProps extends BoxProps {
	config: ForumPostProperties;
	onLike(id: string): void;
	liked: boolean;
	showComments?: boolean;
	showAll?: boolean;
}

export const ForumPost: React.FC<ForumPostProps> = ({
	config: {
		title,
		author: { displayName, username, avatar },
		content,
		likes,
		id,
	},
	onLike,
	liked,
	showComments = true,
	showAll = false,
	...props
}) => {
	return (
		<Grid
			templateColumns='max-content auto'
			templateRows='max-content minmax(100px, auto) auto'
			w='100%'
			bg='brand.150'
			padding={3}
			rounded='lg'
			columnGap={3}
			{...props}
		>
			<HStack gridColumn='2/3' gridRow='1/2'>
				<NextLink href={`/${username}`} passHref>
					<Link>
						<Text
							my='auto'
							w='max-content'
							noOfLines={3}
							maxW={['14ch', '15ch', '100%']}
							fontWeight='550'
						>
							{displayName}
						</Text>
					</Link>
				</NextLink>
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
				<Heading fontSize='xl'>{title}</Heading>
				<Box pos='relative'>
					<Text fontSize='sm' {...(!showAll && { noOfLines: 4 })} zIndex={-5}>
						{content}
					</Text>
					{!showAll && (
						<Box
							zIndex={5}
							w='100%'
							h='100%'
							pos='absolute'
							top={0}
							bg='linear-gradient(rgba(0, 0, 0, 0), rgb(255, 234, 213))'
						/>
					)}
				</Box>
			</VStack>
			{showComments && (
				<Box
					gridColumn='1/3'
					gridRow='3/4'
					color='brand__brown.800'
					fontWeight='600'
					placeSelf='center'
				>
					<NextLink href={`/forum/${id}`} passHref>
						<Link _hover={{
							textDecor: 'underline',
							textDecorationColor: 'brand__brown.300',
						}} >
							<HStack>
								<ChatIcon boxSize='16px' />
								<Text>Коментари</Text>
							</HStack>
						</Link>
					</NextLink>
				</Box>
			)}
		</Grid>
	);
};
