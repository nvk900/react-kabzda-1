import React from 'react';
import Style from './NewPost.module.css';

const NewPost = (props) => {
	
	let newPostElement = React.createRef(); //Ссылка на обьект jsx
	let addPost = () => {
		let text = newPostElement.current.value; //обращение к DOM элементу напрямую (нужно обращаться к virtualDOM)
		props.addPost();
	}
	let onPostCHange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}

	return (
		<div id={Style.newPosts}>
			<h3>Новый пост</h3>
			<textarea onChange={onPostCHange} 
				ref={newPostElement} rows="5" 
				value={props.newPostText}/>
			<button>Добавить фото</button>
			<button onClick={addPost} >Опубликовать</button>
		</div>
	);
}

export default NewPost;