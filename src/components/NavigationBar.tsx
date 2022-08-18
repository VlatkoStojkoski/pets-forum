import { Flex, Heading, HStack, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

import { Brand } from './icons';

const NavigationBar = () => {
	return (
		<Flex
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
			<HStack flexDirection='row-reverse' w='100%'>
				<NextLink href='/dashboard' passHref>
					<Link display='inline-block' _hover={{ textDecor: 'none' }}>
						Dashboard
					</Link>
				</NextLink>
			</HStack>
		</Flex>
	);
};

export default NavigationBar;