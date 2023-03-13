import { Button } from "components/Button/Button";
import c from 'components/AppInterface/Pages/SetableCounterV1/SetBlock/SetBlock.module.css';
import { Input } from "./Input/Input";
import { FC, useState } from "react";

type SetBlockType = {
	editMode: boolean,
	editModeActivator: () => void,
	acceptSettings: (min: number, max: number) => void
}

export const SetBlock: FC<SetBlockType> = (props) => {

	const [minValue, setMinValue] = useState<number>(0);
	const [maxValue, setMaxValue] = useState<number>(5);

	const acceptSettingsHandler = () => {
		props.acceptSettings(minValue, maxValue);
	}

	const isDisabled = !props.editMode;

	return (
		<div className={c.counterBody}>
			<div className={c.displaySetting}>
				<Input
					title={'max'}
					currentValue={maxValue}
					setValue={setMaxValue}
					modeOn={props.editModeActivator}
				/>
				<Input
					title={'min'}
					currentValue={minValue}
					setValue={setMinValue}
					modeOn={props.editModeActivator}
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