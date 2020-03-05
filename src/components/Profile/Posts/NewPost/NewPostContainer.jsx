import React from 'react';
import NewPost from './NewPost'
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../../redux/profileReducer';

const NewPostContainer = (props) => {
	let state = props.store.profilePage;

	let addPost = () => {
		// props.addPost();
		let action = addPostActionCreator()
		props.dispatch(action);
	}
	
	let onPostCHange = (text) => {
		let action = updateNewPostTextActionCreator(text)
		props.dispatch(action);
	}

	return (
		<NewPost 
			updateNewPostText={onPostCHange} 
			addPost={addPost}
			newPostText={state.newPostText}
		/>

	);
}

export default NewPostContainer;