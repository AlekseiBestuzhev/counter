import c from 'components/AppInterface/Pages/SetableCounterV1/SetableCounterV1.module.css';
import { useState } from 'react';
import { BasicCounter } from '../BasicCounter/BasicCounter';
import { SetBlock } from './SetBlock/SetBlock';


export const SetableCounterV1 = () => {

	const [minValue, setMinValue] = useState<number>(0);
	const [maxValue, setMaxValue] = useState<number>(5);
	const [editMode, setEditMode] = useState<boolean>(false);

	const editModeActivator = () => setEditMode(true);

	const acceptSettings = (min: number, max: number) => {
		setMinValue(min);
		setMaxValue(max);
		setEditMode(false);
	}

	return (
		<div className={c.wrapper}>
			<SetBlock
				editMode={editMode}
				acceptSettings={acceptSettings}
				editModeActivator={editModeActivator}
			/>
			<BasicCounter
				min={minValue}
				max={maxValue}
				editMode={editMode}
			/>
		</div>
	);
}