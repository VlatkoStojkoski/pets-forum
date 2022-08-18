import React, { FC } from 'react';

import {
	FormErrorMessage,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputLeftAddon,
	InputRightAddon,
	InputAddonProps,
} from '@chakra-ui/react';
import { Field as FormikField, FieldProps } from 'formik';

export interface InputFieldProps {
	label: string;
	name: string;
	type?: string;
	placeholder?: string;
	leftAddon?: InputAddonProps;
	rightAddon?: InputAddonProps;
	validate?(value: string): string | null;
	isFieldRequired?: boolean;
}

const InputField: FC<InputFieldProps> = ({
	name,
	label,
	leftAddon,
	rightAddon,
	validate,
	isFieldRequired,
	...props
}) => {
	if (!validate && isFieldRequired)
		validate = (value: string) => (!value && 'Ова поле е задолжително') || null;

	return (
		<FormikField name={name} validate={validate} isRequired>
			{({ field, form }: FieldProps) => (
				<FormControl
					isInvalid={!!form.errors[name] && !!form.touched[name]}
					isRequired={isFieldRequired}
				>
					<FormLabel htmlFor={name}>{label}</FormLabel>

					{leftAddon || rightAddon ? (
						<InputGroup>
							{leftAddon && <InputLeftAddon {...leftAddon} />}
							<Input id={name} {...field} {...props} />
							{rightAddon && <InputRightAddon {...rightAddon} />}
						</InputGroup>
					) : (
						<Input id={name} {...field} {...props} />
					)}

					<FormErrorMessage>{form.errors[name]}</FormErrorMessage>
				</FormControl>
			)}
		</FormikField>
	);
};

export { InputField };
