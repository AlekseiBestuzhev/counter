import { Button } from "components/Button/Button";
import c from 'components/AppInterface/Pages/SetableCounterV1/SetBlock/SetBlock.module.css';
import { Input } from "./Input/Input";

export const SetBlock = () => {

	const acceptSettings = () => {

	}

	return (
		<div className={c.counterBody}>
			<div className={c.displaySetting}>
				<Input
					title={'max'}
				/>
				<Input
					title={'min'}
				/>
			</div>
			<div className={c.counterButtons}>
				<Button
					disabled={true}
					callback={acceptSettings}>set</Button>
			</div>
		</div>
	);
}