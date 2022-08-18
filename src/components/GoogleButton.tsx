
import { Button, ButtonProps, Flex } from '@chakra-ui/react';
import React from 'react';

import { Google } from '../components/icons';

export interface GoogleButtonProps extends ButtonProps {
	redirect: string;
}

const GoogleButton: React.FC<GoogleButtonProps> = (props: GoogleButtonProps) => {
	return (
		<Button w='full' variant='outline' type='submit' {...props}>
			<Flex align='center' gridColumnGap={2}>
				<Google boxSize={6} />
				Продолжи со Google
			</Flex>
		</Button>
	);
};

export { GoogleButton };
