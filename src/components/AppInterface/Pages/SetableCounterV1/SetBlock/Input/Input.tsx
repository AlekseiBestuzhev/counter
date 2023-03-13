import c from 'components/AppInterface/Pages/SetableCounterV1/SetBlock/Input/Input.module.css';
import { ChangeEvent, FC } from 'react';

type InputType = {
	title: string,
	modeOn: () => void,
	currentValue: number,
	invalidValues: boolean,
	setValue: (value: number) => void,
}

export const Input: FC<InputType> = (
	{
		title,
		modeOn,
		setValue,
		currentValue,
		invalidValues
	}
) => {

	const changeCurrentValue = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(+e.currentTarget.value);
		modeOn();
	}

	const inputClasses = `${c.input} ${currentValue < 0 ? c.error : ''} ${invalidValues && c.error}`

	return (
		<div className={c.inputGroup}>
			<label className={c.label}>{title}</label>
			<input
				type="number"
				className={inputClasses}
				value={currentValue}
				onChange={changeCurrentValue}
			/>
		</div >
	);
}