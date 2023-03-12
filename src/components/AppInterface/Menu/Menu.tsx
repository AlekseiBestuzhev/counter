import c from 'components/AppInterface/Menu/Menu.module.css';
import closeIcon from 'close.svg';
import { NavLink } from 'react-router-dom';
import { PATH } from '../Pages/Pages';

export const Menu = () => {

	return (
		<div className={c.menu}>
			<img
				src={closeIcon}
				alt="Close icon"
			/>
			<nav className={c.navigation}>
				<NavLink
					to={PATH.BASIC_COUNTER}>
					Basic Counter
				</NavLink>
				<NavLink
					to={PATH.SETABLE_COUNTER_V1}>
					Setable Counter v1
				</NavLink>
				<NavLink
					to={PATH.SETABLE_COUNTER_V2}>
					Setable Counter v2
				</NavLink>
			</nav>
		</div>
	);
}