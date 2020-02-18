import React from 'react';
import Style from './Shapka.module.css'
import ShapkaImg from './../../shapka.jpg';
import ShapkaImg2 from './../../shapka2.jpg';
import Avatar from './../../img/avatar.jpg';
import AddDiscription from './../../img/create-24px.svg';

const Shapka = () => {
	return(
		<div  id={Style.shapka}>
			<img  id={Style.shapkaImg} src={ShapkaImg} alt="шапка ёпта"/>
			<div id={Style.avatar}>
				<img id={Style.avatarImg} src={Avatar} alt="Аватврка" />
				<div id={Style.addAvatar}>
					<p>+</p>
				</div>
			</div>
			<div id={Style.personal}>
				<p id={Style.firstName}>
					Иван
				</p>
				<p id={Style.lastName}>
					Иванов
				</p>
				<p id={Style.status}>
					Обычный парень который есть везде
				</p>
			</div>
			<div id={Style.discription}>
				<div id={Style.addDiscription}>
					<img src={AddDiscription} alt=""/>
				</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae dolore corrupti velit qui porro ut ab nostrum labore, aliquam numquam culpa harum esse consequuntur quidem error nulla! Nam, expedita, eveniet.	
				</p>
				
			</div>
		</div>
		);
}

export default Shapka;