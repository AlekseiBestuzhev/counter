import c from 'components/AppInterface/Header/Header.module.css'
import menuIcon from 'menu.svg'

export const Header = () => {

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