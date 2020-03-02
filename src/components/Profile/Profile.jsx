import React from 'react';
import Shapka from './Shapka/Shapka';
import Posts from './Posts/Posts';
import Style from './Profile.module.css';

const Profile = (props) => {

	return(
		<div>
			<Shapka users={props.profilePage.users[0]}/>
			<Posts posts={props.profilePage.posts} 
				newPostText={props.profilePage.newPostText}
				updateNewPostText={props.updateNewPostText}
				addPost={props.addPost}/>
		</div>)
}

export default Profile;