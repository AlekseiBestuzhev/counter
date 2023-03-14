import { useEffect, useState } from "react";
import { SetBlock } from "../SetableCounterV1/SetBlock/SetBlock";
import { UpdatedCounter } from "./UpdatedCounter/UpdatedCounter";

export const SetableCounterV2 = () => {

	const [minValue, setMinValue] = useState<number>(0);
	const [maxValue, setMaxValue] = useState<number>(5);
	const [editMode, setEditMode] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);

	const editModeActivator = () => setEditMode(true);
	const editModeDeactivator = () => setEditMode(false);

	const errorHandler = (err: boolean) => setError(err);

	const getSettings = (min: number, max: number) => {
		setMinValue(min);
		setMaxValue(max);
	}

	useEffect(() => {
		const minValueFromLS = localStorage.getItem('v2-min');
		const maxValueFromLS = localStorage.getItem('v2-max');
		if (minValueFromLS && maxValueFromLS) {
			const minLS = JSON.parse(minValueFromLS)
			setMinValue(minLS);
			const maxLS = JSON.parse(maxValueFromLS);
			setMaxValue(maxLS);
		}
	}, [])

	return (
		editMode
			? <SetBlock
				error={error}
				editMode={editMode}
				errorHandler={errorHandler}
				getSettings={getSettings}
				editModeActivator={editModeActivator}
				editModeDeactivator={editModeDeactivator}
			/>
			: <UpdatedCounter
				min={minValue}
				max={maxValue}
				editToggle={editModeActivator}
			/>
	);
}