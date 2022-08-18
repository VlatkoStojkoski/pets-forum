import {
	FormErrorMessage,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputLeftAddon,
	InputRightAddon,
	InputAddonProps
} from '@chakra-ui/react';
import { Field as FormikField, FieldProps } from 'formik';
import React from 'react';

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

const defaultValidate = (value: string) => (!value && 'Ова поле е задолжително') || null;

const InputField: React.FC<InputFieldProps> = ({
	name,
	label,
	leftAddon,
	rightAddon,
	validate,
	isFieldRequired,
	...props
}) => {
	return (
		<FormikField
			name={name}
			{...{
				validate: !validate && isFieldRequired ? defaultValidate : validate,
			}}
		>
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

					<FormErrorMessage>{form.errors[name]?.toString()}</FormErrorMessage>
				</FormControl>
			)}
		</FormikField >
	);
};

export { InputField };
