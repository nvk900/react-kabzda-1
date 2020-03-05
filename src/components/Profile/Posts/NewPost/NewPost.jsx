import React from 'react';
import Style from './NewPost.module.css';

const NewPost = (props) => {
		
	let onAddPost = () => {
		props.addPost();
	}
	
	let onPostCHange = (e) => {
		let text = e.target.value;
		props.updateNewPostText(text);

	}

	return (
		<div id={Style.newPosts}>
			<h3>Новый пост</h3>
			<textarea onChange={onPostCHange} 
				rows="5" 
				value={props.newPostText}
				placeholder='Введите текст поста'/>
			<button>Добавить фото</button>
			<button onClick={onAddPost} >Опубликовать</button>
		</div>
	);
}

export default NewPost;