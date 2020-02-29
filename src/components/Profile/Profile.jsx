import React from 'react';
import Shapka from './Shapka/Shapka';
import Posts from './Posts/Posts';
import Style from './Profile.module.css';

const Profile = (props) => {
	return(
		<div>
			<Shapka />
			<Posts posts={props.state.posts}/>
		</div>)
}

export default Profile;