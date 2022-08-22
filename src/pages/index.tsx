import type { NextPage } from 'next';

import { Center, Button, Stack, Heading, Text, Box, Link } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import Head from 'next/head';
import NextLink from 'next/link';

import { Dog, Magnifier } from '../components/icons';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Pets Forum</title>
			</Head>

			<Center flexDirection='column' py={7} mx='auto' w='100%' textAlign='center'>
				<Box pos='relative' w='272px' h='272px' mb={8}>
					<Dog
						w='170px'
						h='max-content'
						pos='absolute'
						left='50%'
						top='75px'
						transform='translateX(-50%)'
					/>
					<Magnifier boxSize='300px' pos='absolute' left={0} />
				</Box>
				<Stack mb={10} alignItems='center' gridRowGap={2} maxW='50ch'>
					<Heading fontSize={{ base: '4xl', sm: '5xl' }} w='100%'>
						Најдоброто за милениците
					</Heading>
					<Text
						w={{ base: '85%', sm: '65%' }}
						fontSize={{ base: 'lg', sm: 'xl' }}
					>
						Најдете точни одговори на сите ваши прашања.
					</Text>
				</Stack>
				<Stack gridGap={5} w='clamp(12ch, 10ch, 20ch)' alignItems='center'>
					{/* <NextLink href='/users/signup' passHref>
						<Link> */}
					<Button colorScheme='accent' size='xl' rounded='2xl' onClick={() => signIn()}>
						Започнете
					</Button>
					{/* </Link>
					</NextLink> */}
					<NextLink href='/users/signin' passHref>
						<Link>
							<Button
								size='xl'
								rounded='2xl'
								boxShadow={`
							-15px 15px 25px 0 #f6cfa580,
							15px -15px 25px 0 #ffffff
						`}
								bg='bg'
							>
								Логирај се
							</Button>
						</Link>
					</NextLink>
				</Stack>
			</Center>
		</>
	);
};

export default Home;
