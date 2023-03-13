import c from 'components/AppInterface/Pages/SetableCounterV1/SetableCounterV1.module.css';
import { BasicCounter } from '../BasicCounter/BasicCounter';
import { SetBlock } from './SetBlock/SetBlock';


export const SetableCounterV1 = () => {

	return (
		<div className={c.wrapper}>
			<SetBlock />
			<BasicCounter />
		</div>
	);
}