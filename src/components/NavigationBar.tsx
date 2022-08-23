import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Flex, Grid, Heading, HStack, Link, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { signIn, signOut } from 'next-auth/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { Brand } from './icons';

const NavigationBar = () => {
	const router = useRouter();

	return (
		<Grid
			templateColumns='auto auto'
			justifyContent='space-between'
			px={7}
			py={3}
			top={0}
			pos='sticky'
			w='100%'
			h='max-content'
			bgColor='rgba(255, 255, 255, .15)'
			zIndex={9999}
			sx={{ backdropFilter: 'blur(15px)' }}
		>
			<NextLink href='/' passHref>
				<Link display='inline-block' _hover={{ textDecor: 'none' }} minW='fit-content'>
					<Flex alignItems='center' gridColumnGap={2.5} w='fit-content'>
						<Brand boxSize='36px' />
						<Heading fontSize='xl' color='brand__brown.900'>
							Pets Forum
						</Heading>
					</Flex>
				</Link>
			</NextLink>
			<Menu>
				<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
					Developer menu
				</MenuButton>
				<MenuList>
					<MenuItem onClick={() => router.push('/dashboard')}>
						Dashboard
					</MenuItem>
					<MenuItem onClick={() => signIn()}>
						Sign in
					</MenuItem>
					<MenuItem onClick={() => signOut()}>
						Sign out
					</MenuItem>
				</MenuList>
			</Menu>
		</Grid>
	);
};

export default NavigationBar;