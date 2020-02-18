import React from 'react';
import logo from './../../logo.png';
import Style from './Header.module.css';

const Header = () => {
	return(
		<header className={Style.header}>
			<div>
				<a href="#s">
					<img id={Style.logo} src={logo} alt='пошел нахой'/>
				</a>
			</div>
       	</header>
		)
}

export default Header;