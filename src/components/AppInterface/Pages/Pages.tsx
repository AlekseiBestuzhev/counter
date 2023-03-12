import { Navigate, Route, Routes } from "react-router-dom";
import { BasicCounter } from "components/AppInterface/Pages/BasicCounter/BasicCounter";
import { SetableCounterV1 } from "components/AppInterface/Pages/SetableCounterV1/SetableCounterV1";
import { SetableCounterV2 } from "components/AppInterface/Pages/SetableCounterV2/SetableCounterV2";

export const PATH = {
	BASIC_COUNTER: '/basic-counter',
	SETABLE_COUNTER_V1: '/setable-counter-v1',
	SETABLE_COUNTER_V2: '/setable-counter-v2',
}
export const Pages = () => {

	return (
		<Routes>
			<Route path='/' element={<Navigate to={PATH.BASIC_COUNTER} />} />
			<Route path={PATH.BASIC_COUNTER} element={<BasicCounter />} />
			<Route path={PATH.SETABLE_COUNTER_V1} element={<SetableCounterV1 />} />
			<Route path={PATH.SETABLE_COUNTER_V2} element={<SetableCounterV2 />} />
		</Routes>
	);
}