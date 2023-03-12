import { FC } from 'react';
import c from './Button.module.css'

type ButtonType = {
	children: React.ReactNode,
	callback: () => void,
	disabled: boolean
}

export const Button: FC<ButtonType> = (props) => {

	const { children, callback, disabled } = props;

	return (
		<button
			disabled={disabled}
			onClick={callback}
			className={c.button}>
			{children}
		</button>
	);
}