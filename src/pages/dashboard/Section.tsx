import React, { FC, ReactNode } from 'react';

import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import {
	Box,
	Heading,
	HStack,
	IconButton,
	useDisclosure,
	Collapse,
	CollapseProps,
} from '@chakra-ui/react';

export interface SectionProps extends CollapseProps {
	title: string;
	icon: ReactNode;
}

export const Section: FC<SectionProps> = ({
	title,
	icon,
	children,
	...props
}: SectionProps) => {
	const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });

	return (
		<Box>
			<HStack alignItems='center' mb={3}>
				<Box zIndex={5000}>{icon}</Box>
				<Heading
					lineHeight={1}
					fontSize={{ base: '1.35rem', sm: '1.75rem' }}
					zIndex={5000}
				>
					{title}
				</Heading>
				<Box w='40px' textAlign='right' zIndex={5000}>
					<IconButton
						aria-label='Show section'
						variant='ghost'
						bg='transparent'
						_hover={{ bg: '#fceee1' }}
						_active={{ bg: '#f5e3d3' }}
						icon={(() => {
							const UpDownIcon = isOpen ? ChevronUpIcon : ChevronDownIcon;

							return (
								<UpDownIcon
									bg='#eec59b'
									rounded='50%'
									color='bg'
									boxSize='24px'
									onClick={onToggle}
								/>
							);
						})()}
					/>
				</Box>
			</HStack>
			<Collapse
				in={isOpen}
				style={{
					overflow: 'initial',
				}}
				{...props}
			>
				{children}
			</Collapse>
		</Box>
	);
};
