import React from 'react';
import ShapkaImg from './../shapka.jpg';
import ShapkaImg2 from './../shapka2.jpg';
import Avatar from './../img/avatar.jpg';
import AddDiscription from './../img/create-24px.svg';

const Shapka = () => {
	return(
		<div  id='shapka'>
			<img  id='shapkaImg' src={ShapkaImg} alt="шапка ёпта"/>
			<div id='avatar'>
				<img id='avatarImg' src={Avatar} alt="Аватврка" />
				<div id='addAvatar'>
					<p>+</p>
				</div>
			</div>
			<div id='personal'>
				<p id="firstName">
					Иван
				</p>
				<p id="lastName">
					Иванов
				</p>
				<p id="status">
					Обычный парень который есть везде
				</p>
			</div>
			<div id='discription'>
				<div id='addDiscription'>
					<img src={AddDiscription} alt=""/>
				</div>
				<p id=''>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae dolore corrupti velit qui porro ut ab nostrum labore, aliquam numquam culpa harum esse consequuntur quidem error nulla! Nam, expedita, eveniet.	
				</p>
				
			</div>
		</div>
		);
}

export default Shapka;