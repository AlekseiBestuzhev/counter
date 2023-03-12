import c from 'components/AppInterface/Menu/Menu.module.css';
import closeIcon from 'close.svg';
import { NavLink } from 'react-router-dom';
import { PATH } from '../Pages/Pages';
import { FC } from 'react';

type MenuType = {
	setMenuClose: () => void,
	open: boolean
}

export const Menu: FC<MenuType> = ({ setMenuClose, open }) => {

	const menuClasses = open ? `${c.menu} ${c.open}` : c.menu;

	return (
		<>
			{open && <div className={c.dark} onClick={setMenuClose}></div>}
			<div className={menuClasses}>
				<img
					src={closeIcon}
					alt="Close icon"
					onClick={setMenuClose}
					className={c.burgerMenuClose}
				/>
				<nav className={c.navigation}>
					<NavLink
						onClick={setMenuClose}
						to={PATH.BASIC_COUNTER}
						className={({ isActive }) => isActive ? c.active : ''}
					>
						Basic Counter
					</NavLink>
					<NavLink
						onClick={setMenuClose}
						to={PATH.SETABLE_COUNTER_V1}
						className={({ isActive }) => isActive ? c.active : ''}
					>
						Setable Counter v1
					</NavLink>
					<NavLink
						onClick={setMenuClose}
						to={PATH.SETABLE_COUNTER_V2}
						className={({ isActive }) => isActive ? c.active : ''}
					>
						Setable Counter v2
					</NavLink>
				</nav>
			</div>
		</>
	);
}