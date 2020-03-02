import React from 'react';
import Post from './Post/Post'
import Post2 from './Post/Post2'
import NewPost from './NewPost/NewPost'
import Style from './Posts.module.css'

const Posts = (props) => {

	// Принимаем posts
		
	let postsElements = props.posts.map ( ( p ) => (
		p.img ? <Post2 id={p.id} likeCounts={p.likesCounts} img ={p.img} message={p.message} /> : <Post2 id={p.id} likeCounts={p.likesCounts} message={p.message} />
		));

	return (
		<div id={Style.posts}>
			<NewPost addPost={props.addPost} 
			newPostText={props.newPostText}
			updateNewPostText={props.updateNewPostText}/>
			<div id={Style.postsBlock}>
				{postsElements}
			</div>
		</div>	
	);
}

export default Posts;