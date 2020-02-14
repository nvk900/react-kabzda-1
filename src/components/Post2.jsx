import React from 'react';
import PhotoPost from './../img/fotoPost2.jpg'
import LikeIco from './../img/like.svg';
import DislikeIco from './../img/dislike.svg';
import RepostIco from './../img/repost.svg';
import Avatar from './../img/avatar.jpg';

const Post2 = () => {
	return (
		<div className='post'>
			<div className="postContent">
				<div className="autorPost">
					<div className="avatarAutor">
						<img src={Avatar} alt="Аватар"/>
					</div>
					<p className="nameAutor">Иван Иванов</p>
				</div>
				<img className="postImg" src={PhotoPost} alt="Фоточка"/>
				<p className="postP">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet officia aspernatur voluptate odio facilis omnis non nihil ad repellat ut quibusdam magni, quo amet perferendis eum iste cupiditate ullam saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet officia aspernatur voluptate odio facilis omnis non nihil ad repellat ut quibusdam magni, quo amet perferendis eum iste cupiditate ullam saepe!
				</p>
			</div>
			
			<div className="postBtns">
				<div className="like postBtn btn">
					<img src={LikeIco} alt="Like"/>
					<p className="counter likeCounter">150</p>
				</div>
				<div className="disLike postBtn btn">
					<img src={DislikeIco} alt="Like"/>
					<p className="counter dislikeCounter">50</p>
				</div>
				<div className="repost postBtn btn">
					<img src={RepostIco} alt="Like"/>
					<p className="counter repostCounter">80</p>
				</div>
			</div>
		</div>
		);
}

export default Post2;