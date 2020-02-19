import React from 'react';
import Style from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Dialogs = (props) => {
	return (
		<div className={Style.dialogs}>
			<div className={Style.dialogsItems}>
				<div className={Style.dialog}>
					<NavLink to='/messages/1' activeClassName={Style.active}>Dimych</NavLink> 	
				</div>
				<div className={Style.dialog}>
					<NavLink to='/messages/2' activeClassName={Style.active}>Andrey</NavLink>
				</div>
				<div className={Style.dialog}>
					<NavLink to='/messages/3' activeClassName={Style.active}>Sveta</NavLink>
				</div>
				<div className={Style.dialog}>
					<NavLink to='/messages/4' activeClassName={Style.active}>Sahsa</NavLink>
				</div>
				<div className={Style.dialog}>
					<NavLink to='/messages/5' activeClassName={Style.active}>Viktor</NavLink>
				</div>
				<div className={Style.dialog}>
					<NavLink to='/messages/6' activeClassName={Style.active}>Valera</NavLink>
				</div>
			</div>
			<div className={Style.messages}>
				<div className={Style.message}>Hi</div>
				<div className={Style.message}>How is you it-kamasutra?</div>
				<div className={Style.message}>YO!!!</div>
			</div>
		</div>	
	);
}

export default Dialogs;