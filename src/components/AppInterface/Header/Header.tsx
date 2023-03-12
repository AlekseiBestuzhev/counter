import c from 'components/AppInterface/Header/Header.module.css'
import menuIcon from 'menu.svg'
import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { PATH } from '../Pages/Pages'

type HeaderType = {
	setMenuOpen: () => void
}

export const Header: FC<HeaderType> = ({ setMenuOpen }) => {

	const location = useLocation();
	const currentPath = location.pathname;

	const pageTitle =
		currentPath === PATH.BASIC_COUNTER
			? 'Basic Counter'
			: currentPath === PATH.SETABLE_COUNTER_V1
				? 'Setable Counter v1'
				: currentPath === PATH.SETABLE_COUNTER_V2
					? 'Setable Counter v2'
					: 'Error'

	return (
		<div className={c.headerBody}>
			<img
				src={menuIcon}
				alt="Menu icon"
				onClick={setMenuOpen}
				className={c.burgerMenuOpen}
			/>
			<h1 className={c.title}>{pageTitle}</h1>
		</div>
	);
}