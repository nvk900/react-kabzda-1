import React from 'react';
import Style from './Friends.module.css';
import {NavLink} from 'react-router-dom';

const Friends = (props) => {
	
	let friends = props.state.map ( (f)=>(
			<a href={f.href} className={Style.navFriend}>
				<div className={Style.navFriendBlock}>
					<img className={Style.friendAvatar} src={f.avatar} alt={f.name}/>
					<p className={Style.friendName}>{f.name}</p>
				</div>
			</a>
		));

	return(
		<div className={Style.navFriends}>
			<h4>Friends</h4>
			{friends}			
		</div>		)
}

export default Friends;