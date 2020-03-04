import React from 'react';
import Style from './NewPost.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../../redux/profileReducer';

const NewPost = (props) => {
		
	let addPost = () => {
		let action = addPostActionCreator()
		props.dispatch(action);
	}
	
	let onPostCHange = (e) => {
		let text = e.target.value;
		let action = updateNewPostTextActionCreator(text)
		props.dispatch(action);
	}

	return (
		<div id={Style.newPosts}>
			<h3>Новый пост</h3>
			<textarea onChange={onPostCHange} 
				rows="5" 
				value={props.newPostText}
				placeholder='Введите текст поста'/>
			<button>Добавить фото</button>
			<button onClick={addPost} >Опубликовать</button>
		</div>
	);
}

export default NewPost;