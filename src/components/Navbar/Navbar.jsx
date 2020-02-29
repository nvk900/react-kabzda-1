import React from 'react';
import Style from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import Friends from './Friends/Friends.jsx';
import NavbarItems from './NavbarItems/NavbarItems.jsx';

const Navbar = (props) => {
	return(
		<nav className={Style.nav}>
			<NavbarItems state={props.state.navLinks}  />
			<Friends state={props.state.friends} />
		</nav>)
}

export default Navbar;