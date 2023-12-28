import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface FormInputProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	onEmailChange: (email: string, isValid: boolean) => void
	defaultValue: string;
}