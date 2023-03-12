import { FC, ReactNode, useEffect, useState } from "react";
import { Header } from "components/AppInterface/Header/Header";
import { Menu } from "./Menu/Menu";

type AppInterfaceType = {
	children: ReactNode
}

export const AppInterface: FC<AppInterfaceType> = ({ children }) => {

	const [open, setOpen] = useState(false)
	const setMenuClose = () => setOpen(false)
	const setMenuOpen = () => setOpen(true)

	useEffect(() => {
		open && (document.body.style.overflow = 'hidden')
		!open && (document.body.style.overflow = 'unset')
	}, [open])

	return (
		<>
			<Header setMenuOpen={setMenuOpen} />
			<Menu setMenuClose={setMenuClose} open={open} />
			<div>{children}</div>
		</>
	);
}