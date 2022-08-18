import React, { FC, useState } from 'react';

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
	FormErrorMessage,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
	IconButton,
} from '@chakra-ui/react';
import { Field, FieldProps } from 'formik';

const PasswordField: FC = () => {
	const [showPassword, setShowPassword] = useState(false);

	const passwordValidate = (value: string) =>
		!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value) &&
		'Лозинката мора да е најмалку 8 симболи долг и да содржи барем: една голема буква, една мала буква, еден број';

	return (
		<Field name='password' validate={passwordValidate}>
			{({ field, form }: FieldProps) => (
				<FormControl
					isInvalid={!!form.errors.password && !!form.touched.password}
					isRequired
				>
					<FormLabel htmlFor='password'>Лозинка</FormLabel>
					<InputGroup size='md'>
						<Input
							type={showPassword ? 'text' : 'password'}
							id='password'
							placeholder='******'
							{...field}
						/>
						<InputRightElement width='2.75rem'>
							<IconButton
								h='1.75rem'
								size='sm'
								onClick={() => setShowPassword(!showPassword)}
								icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
								aria-label='Show password'
							/>
						</InputRightElement>
					</InputGroup>
					<FormErrorMessage>{form.errors.password}</FormErrorMessage>
				</FormControl>
			)}
		</Field>
	);
};

export { PasswordField };
