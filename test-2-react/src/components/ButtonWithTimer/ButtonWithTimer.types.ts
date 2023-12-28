import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

export interface ButtonWithTimerProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	onСlickHappened: () => void
}