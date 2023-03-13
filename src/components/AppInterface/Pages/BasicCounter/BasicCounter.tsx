import { FC, useEffect, useState } from 'react';
import { Button } from 'components/Button/Button';
import c from 'components/AppInterface/Pages/BasicCounter/BasicCounter.module.css'

type BasicCounterType = {
	min?: number,
	max?: number,
	error?: boolean,
	editMode?: boolean
}

export const BasicCounter: FC<BasicCounterType> = (
	{
		min,
		max,
		error,
		editMode
	}
) => {

	const minValue = min ? min : 0;
	const maxValue = max ? max : 5;
	const errorText = error ? error : false;
	const setting = editMode ? editMode : false;

	const [count, setCount] = useState<number>(minValue);

	const increaseCount = () => setCount(count => count + 1);
	const resetCount = () => setCount(minValue);

	useEffect(() => {
		setCount(minValue);
	}, [minValue])

	const incDisabled = count === maxValue || setting;
	const resetDisabled = count === minValue || setting;

	const displayStyle = `${c.counterDisplay} ${incDisabled ? c.red : ''}`

	return (
		<div className={c.counterBody}>
			{
				editMode
					? <div className={c.displaySetting}>
						{
							errorText
								? <span className={c.red}>INVALID VALUE</span>
								: "Enter values and press 'set'"
						}
					</div>
					: <div className={displayStyle}>{count}</div>
			}
			<div className={c.counterButtons}>
				<Button
					disabled={incDisabled}
					callback={increaseCount}
				>
					inc
				</Button>
				<Button
					disabled={resetDisabled}
					callback={resetCount}
				>
					reset
				</Button>
			</div>
		</div>
	);
}