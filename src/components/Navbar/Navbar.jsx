import React from 'react';
import Style from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
	return(
		<nav className={Style.nav}>
			<div className={Style.item}>
				<NavLink to="/profile" activeClassName={Style.active}>Profile</NavLink>
			</div>
			<div className={Style.item}>
				<NavLink to="/messages" activeClassName={Style.active}>Messages</NavLink>
			</div>
			<div className={Style.item}>
				<NavLink to="/news" activeClassName={Style.active}>News</NavLink>
			</div>
			<div className={Style.item}>
				<NavLink to="/music" activeClassName={Style.active}>Music</NavLink>
			</div>
			<div className={Style.item}>
				<NavLink to="/settings" activeClassName={Style.active}>Settings</NavLink>
			</div>
		</nav>		)
}

export default Navbar;