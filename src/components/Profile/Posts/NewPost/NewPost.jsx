import React from 'react';
import Style from './NewPost.module.css';

const NewPost = (props) => {
	
	let newPostElement = React.createRef(); //Ссылка на обьект jsx
	let addPost = () => {
		let text = newPostElement.current.value; //обращение к DOM элементу напрямую (нужно обращаться к virtualDOM)
		props.addPost(text);
		newPostElement.current.value ='';
	}

	return (
		<div id={Style.newPosts}>
			<h3>Новый пост</h3>
			<textarea ref={newPostElement} rows="5" name="text"></textarea>
			<button>Добавить фото</button>
			<button onClick={addPost} >Опубликовать</button>
		</div>
	);
}

export default NewPost;