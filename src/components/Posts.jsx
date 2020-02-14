import React from 'react';
import Post from './../components/Post.jsx'
import Post2 from './../components/Post2.jsx'

const Posts = () => {
	return (
		<div id='posts'>
			<div id='newPosts'>
				newpost
			</div>
			<div id='postsBlock'>
				<Post />
				<Post2 />
				<Post />
				<Post2 />
			</div>
		</div>	
		);
}

export default Posts;