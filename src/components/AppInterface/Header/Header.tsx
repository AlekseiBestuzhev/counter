import c from 'components/AppInterface/Header/Header.module.css'
import menuIcon from 'menu.svg'
import { FC } from 'react'

type HeaderType = {
	setMenuOpen: () => void
}

export const Header: FC<HeaderType> = ({ setMenuOpen }) => {

	return (
		<div className={c.headerBody}>
			<img
				src={menuIcon}
				alt="Menu icon"
				className={c.burgerMenuOpen}
			/>
			<h1 className={c.title}>Title</h1>
		</div>
	);
}