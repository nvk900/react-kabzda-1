import React from 'react';
import Style from './NewPost.module.css';

const NewPost = (props) => {
	return (
		<div id={Style.newPosts}>
			<h3>Новый пост</h3>
			<form action="none" method="get">

				<textarea rows="5" name="text"></textarea>
				<button>Добавить фото</button>
				<button>Опубликовать</button>
			</form>
		</div>
	);
}

export default NewPost;