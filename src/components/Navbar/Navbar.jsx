import React from 'react';
import Style from './Navbar.module.css';

const Navbar = () => {
	return(
		<nav className={Style.nav}>
			<div className={Style.item}>
				<a className={Style.active} href="#s">Profile</a>
			</div>
			<div className={Style.item}>
				<a href="#s">Messages</a>
			</div>
			<div className={Style.item}>
				<a href="#s">News</a>
			</div>
			<div className={Style.item}>
				<a href="#s">Music</a>
			</div>
			<div className={Style.item}>
				<a href="#s">Settings</a>
			</div>
		</nav>		)
}

export default Navbar;