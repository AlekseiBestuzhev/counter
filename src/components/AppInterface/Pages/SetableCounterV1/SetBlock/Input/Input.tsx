import c from 'components/AppInterface/Pages/SetableCounterV1/SetBlock/Input/Input.module.css';
import { FC } from 'react';

type InputType = {
	title: string,
	currentValue: number,
	changeCurrentValue: () => void
}

export const Input: FC<InputType> = ({ title, currentValue, changeCurrentValue }) => {

	return (
		<div className={c.inputGroup}>
			<label className={c.label}>{title}</label>
			<input
				type="number"
				className={c.input}
				value={currentValue}
				onChange={changeCurrentValue}
			/>
		</div >
	);
}