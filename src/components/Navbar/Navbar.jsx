import React from 'react';
import Style from './Navbar.module.css';

const Navbar = () => {
	return(
		<nav className={Style.nav}>
			<div className={Style.item}>
				<a className={Style.active} href="/profile">Profile</a>
			</div>
			<div className={Style.item}>
				<a href="/messages">Messages</a>
			</div>
			<div className={Style.item}>
				<a href="/news">News</a>
			</div>
			<div className={Style.item}>
				<a href="/music">Music</a>
			</div>
			<div className={Style.item}>
				<a href="/settings">Settings</a>
			</div>
		</nav>		)
}

export default Navbar;