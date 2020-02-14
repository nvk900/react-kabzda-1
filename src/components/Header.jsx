import React from 'react';
import logo from './../logo.png';

const Header = () => {
	return(
		<header className='header'>
			<div>
				<a href="#s">
					<img id='logo' src={logo} alt='пошел нахой'/>
				</a>
			</div>
       	</header>
		)
}

export default Header;