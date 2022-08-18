import { Grid, Link, Stack, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

import { NeuContainer } from '../../components';
import { LightningBolt, Poison, PawEmergency, Rocket, Person } from '../../components/icons';

import { Section } from './Section';

export const QuickAccess = () => {
	const iconsConfig = [
		{
			color: '#a5d653',
			title: 'Опасности',
			url: '/danger',
			icon: Poison,
		},
		{
			color: '#f33a3a',
			title: 'Блиски ветеринари',
			url: '/emergency',
			icon: PawEmergency,
		},
		{
			color: '#5465ff',
			title: 'Форум',
			url: '/forum',
			icon: Rocket,
		},
		{
			color: '#8563bf',
			title: 'Профил',
			url: '/profile',
			icon: Person,
		},
	];

	return (
		<Section title='Брз пристап' icon={<LightningBolt boxSize='32px' />}>
			<Grid
				gridGap={5}
				gridTemplateColumns='repeat(auto-fill, 110px)'
				placeContent='center'
			>
				{iconsConfig.map(({ icon: Icon, color, title, url }, iconI) => (
					<NeuContainer
						asContainer={Stack}
						boxSize='100%'
						h='max-content'
						rounded='3xl'
						py={4}
						zIndex={1}
						key={iconI}
					>
						<NextLink href={url}>
							<Link>
								<Icon boxSize='100%' color={color} px={4} />
							</Link>
						</NextLink>
						<Text textAlign='center' fontSize='sm' wordBreak='keep-all'>
							{title}
						</Text>
					</NeuContainer>
				))}
			</Grid>
		</Section>
	);
};
