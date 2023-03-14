import { Button } from "components/Button/Button";
import c from 'components/AppInterface/Pages/SetableCounterV1/SetBlock/SetBlock.module.css';
import { Input } from "./Input/Input";
import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PATH } from "../../Pages";

type SetBlockType = {
	error: boolean,
	editMode: boolean,
	editModeActivator: () => void,
	errorHandler: (err: boolean) => void,
	acceptSettings: (min: number, max: number) => void
}

export const SetBlock: FC<SetBlockType> = (
	{
		error,
		editMode,
		editModeActivator,
		errorHandler,
		acceptSettings
	}
) => {

	const [minValue, setMinValue] = useState<number>(0);
	const [maxValue, setMaxValue] = useState<number>(5);

	const acceptSettingsHandler = () => {
		acceptSettings(minValue, maxValue);
	}

	const invalidValues = minValue >= maxValue;
	const belowZero = minValue < 0;
	const isDisabled = !editMode || error;

	const errorObserver = () => {
		if (invalidValues || belowZero) {
			errorHandler(true);
		}
		else {
			errorHandler(false);
		}
	}

	useEffect(() => {
		errorObserver();
	}, [minValue, maxValue])

	const location = useLocation();
	const currentPath = location.pathname;
	const pageForLS = currentPath === PATH.SETABLE_COUNTER_V1
		? 'v1'
		: currentPath === PATH.SETABLE_COUNTER_V2
			? 'v2'
			: ''

	useEffect(() => {
		const minValueFromLS = localStorage.getItem(`${pageForLS}-min`);
		const maxValueFromLS = localStorage.getItem(`${pageForLS}-max`);
		if (minValueFromLS && maxValueFromLS) {
			const minLS = JSON.parse(minValueFromLS)
			setMinValue(minLS);
			const maxLS = JSON.parse(maxValueFromLS);
			setMaxValue(maxLS);
			acceptSettings(minLS, maxLS);
		}
	}, [])

	useEffect(() => {
		localStorage.setItem(`${pageForLS}-min`, JSON.stringify(minValue));
		localStorage.setItem(`${pageForLS}-max`, JSON.stringify(maxValue));
	}, [minValue, maxValue]);

	return (
		<div className={c.counterBody}>
			<div className={c.displaySetting}>
				<Input
					title={'max'}
					setValue={setMaxValue}
					currentValue={maxValue}
					modeOn={editModeActivator}
					invalidValues={invalidValues}
				/>
				<Input
					title={'min'}
					setValue={setMinValue}
					currentValue={minValue}
					modeOn={editModeActivator}
					invalidValues={invalidValues}
				/>
			</div>
			<div className={c.counterButtons}>
				<Button
					disabled={isDisabled}
					callback={acceptSettingsHandler}>set</Button>
			</div>
		</div>
	);
}