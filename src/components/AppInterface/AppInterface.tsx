import { FC, ReactNode } from "react";
import { Header } from "components/AppInterface/Header/Header";

type AppInterfaceType = {
	children: ReactNode
}

export const AppInterface: FC<AppInterfaceType> = ({ children }) => {

	return (
		<>
			<Header />
			<div>{children}</div>
		</>
	);
}