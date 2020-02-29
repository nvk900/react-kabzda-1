import React from 'react';
import Style from './NavbarItems.module.css';
import {NavLink} from 'react-router-dom';

const NavbarItems = (props) => {
	
	let navLinks = props.state.map ( (nl)=>(
			<div className={Style.item}>
				<NavLink to={nl.href} activeClassName={Style.active}>{nl.value}</NavLink>
			</div>
		));

	return(
		<div className="navItmes">
			{navLinks}
		</div>		)
}

export default NavbarItems;