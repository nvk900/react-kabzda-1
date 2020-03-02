import React from 'react';
import Shapka from './Shapka/Shapka';
import Posts from './Posts/Posts';
import Style from './Profile.module.css';

const Profile = (props) => {
	return(
		<div>
			<Shapka users={props.state.users[0]}/>
			<Posts posts={props.state.posts} addPost={props.addPost}/>
		</div>)
}

export default Profile;