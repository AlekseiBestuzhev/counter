import { FC, useState } from 'react';
import { Button } from 'components/Button/Button';
import c from 'components/AppInterface/Pages/BasicCounter/BasicCounter.module.css'

type BasicCounterType = {
	min?: number,
	max?: number,
	settingMode?: boolean
}

export const BasicCounter: FC<BasicCounterType> = (props) => {

	const {
		min,
		max,
		settingMode } = props;

	const minValue = min ? min : 0;
	const maxValue = max ? max : 5;
	const setting = settingMode ? settingMode : false;

	const [count, setCount] = useState<number>(minValue);

	const increaseCount = () => setCount(count => count + 1);
	const resetCount = () => setCount(minValue);

	const incDisabled = count === maxValue || setting;
	const resetDisabled = count === minValue || setting;

	const displayStyle = `${c.counterDisplay} ${incDisabled ? c.red : ''}`

	return (
		<div className={c.counterBody}>
			{
				settingMode
					? <div className={c.displaySetting}>Enter values and press 'set'</div>
					: <div className={displayStyle}>{count}</div>
			}
			<div className={c.counterButtons}>
				<Button
					disabled={incDisabled}
					callback={increaseCount}>inc</Button>
				<Button
					disabled={resetDisabled}
					callback={resetCount}>reset</Button>
			</div>
		</div>
	);
}