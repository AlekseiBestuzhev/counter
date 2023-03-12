import { useState } from 'react';
import { Button } from '../../../Button/Button';
import c from './CounterSimple.module.css'

export const Counter = () => {

	const minValue = 0;
	const maxValue = 5;

	const [count, setCount] = useState<number>(minValue);

	const increaseCount = () => setCount(count => count + 1);
	const resetCount = () => setCount(minValue);

	const incDisabled = count === maxValue;
	const resetDisabled = count === minValue;

	const displayStyle = `${c.counterDisplay} ${incDisabled ? c.red : ''}`

	return (
		<div className={c.counterBody}>
			<div className={displayStyle}>{count}</div>
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