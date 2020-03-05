import React from 'react';
import Post from './Post/Post'
import Post2 from './Post/Post2'
import NewPost from './NewPost/NewPost'
import NewPostContainer from './NewPost/NewPostContainer'
import Style from './Posts.module.css'

const Posts = (props) => {
	// Принимаем posts
		
	let postsElements = props.posts.map ( ( p ) => (
		p.img ? <Post2 id={p.id} likeCounts={p.likesCounts} img ={p.img} message={p.message} /> : <Post2 id={p.id} likeCounts={p.likesCounts} message={p.message} />
		));

	return (
		<div id={Style.posts}>
			<NewPostContainer 
				store={props.store}
				dispatch={props.dispatch}
			/>
			<div id={Style.postsBlock}>
				{postsElements}
			</div>
		</div>	
	);
}

export default Posts;