import { FC, ReactNode } from "react";
import { Header } from "components/AppInterface/Header/Header";
import { Menu } from "./Menu/Menu";

type AppInterfaceType = {
	children: ReactNode
}

export const AppInterface: FC<AppInterfaceType> = ({ children }) => {

	return (
		<>
			<Header />
			<Menu />
			<div>{children}</div>
		</>
	);
}