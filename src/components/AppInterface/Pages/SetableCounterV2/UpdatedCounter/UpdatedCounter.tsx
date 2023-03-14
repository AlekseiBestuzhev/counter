import c from "components/AppInterface/Pages/SetableCounterV2/UpdatedCounter/UpdatedCounter.module.css"
import { Button } from "components/Button/Button";
import { FC, useEffect, useState } from "react";

type UpdatedCounterType = {
	min: number,
	max: number,
	editToggle: () => void
}

export const UpdatedCounter: FC<UpdatedCounterType> = (
	{
		min,
		max,
		editToggle
	}
) => {

	const [count, setCount] = useState<number>(min);

	const increaseCount = () => setCount(count => count + 1);
	const resetCount = () => setCount(min);

	useEffect(() => {
		setCount(min);
	}, [min])

	const incDisabled = count === max;
	const resetDisabled = count === min;

	const displayStyle = `${c.counterDisplay} ${incDisabled ? c.red : ''}`

	return (
		<div className={c.body}>
			<div className={displayStyle}>{count}</div>
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
				<Button
					disabled={false}
					callback={editToggle}
				>
					set
				</Button>
			</div>
		</div>
	);
}