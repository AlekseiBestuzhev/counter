import c from 'components/AppInterface/Pages/SetableCounterV1/SetBlock/Input/Input.module.css';
import { ChangeEvent, FC } from 'react';

type InputType = {
	title: string,
	currentValue: number,
	setValue: (value: number) => void,
	modeOn: () => void,
}

export const Input: FC<InputType> = ({ title, currentValue, setValue, modeOn }) => {

	const changeCurrentValue = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(+e.currentTarget.value);
		modeOn();
	}

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