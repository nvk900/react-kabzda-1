import React from 'react';
import PhotoPost from './../../img/fotoPost.jpg'
import LikeIco from './../../img/like.svg';
import DislikeIco from './../../img/dislike.svg';
import RepostIco from './../../img/repost.svg';
import Avatar from './../../img/avatar.jpg';
import Style from './../../components/Post/Post.module.css';

const Post = (props) => {
	return (
		<div className={Style.post}>
			<div className={Style.postContent}>
				<div className={Style.autorPost}>
					<div className={Style.avatarAutor}>
						<img src={Avatar} alt="Аватар"/>
					</div>
					<p className={Style.nameAutor}>Иван Иванов</p>
				</div>

				<img className={Style.postImg} src={PhotoPost} alt="Фоточка"/>
				<p className={Style.postP}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet officia aspernatur voluptate odio facilis omnis non nihil ad repellat ut quibusdam magni, quo amet perferendis eum iste cupiditate ullam saepe!
				</p>

			</div>
			
			<div className={Style.postBtns}>
				<div className={`${Style.like} ${Style.postBtn} ${Style.btn}`}>
					<img src={LikeIco} alt="Like"/>
					<p className={`${Style.counter} ${Style.likeCounter}`}>150</p>
				</div>
				<div className={`${Style.disLike} ${Style.postBtn} ${Style.btn}`}>
					<img src={DislikeIco} alt="Like"/>
					<p className={`${Style.counter} ${Style.dislikeCounter}`}>50</p>
				</div>
				<div className={`${Style.repost} ${Style.postBtn} ${Style.btn}`}>
					<img src={RepostIco} alt="Like"/>
					<p className={`${Style.counter} ${Style.repostCounter}`}>80</p>
				</div>
			</div>
		</div>
		);
}

export default Post;