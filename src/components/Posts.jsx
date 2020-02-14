import React from 'react';
import Post from './../components/Post.jsx'

const Posts = () => {
	return (
		<div id='posts'>
			<div id='newPosts'>
				newpost
			</div>
			<div id='postsBlock'>
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
		</div>	
		);
}

export default Posts;