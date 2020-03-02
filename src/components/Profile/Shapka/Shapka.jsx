import React from 'react';
import Style from './Shapka.module.css'
import AddDiscription from './../../../img/create-24px.svg';
import ShapkaImg from './../../../img/shapka.jpg';
// import ShapkaImg2 from './../../../img/shapka2.jpg';
// import Avatar from './../../../img/avatar.jpg';


const Shapka = (props) => {
	return(
		<div  id={Style.shapka}>
			<img  id={Style.shapkaImg} src={ShapkaImg} alt={props.users.firstName}/>
			<div id={Style.avatar}>
				<img id={Style.avatarImg} src={props.users.avatar} alt={props.users.firstName} />
				<div id={Style.addAvatar}>
					<p>+</p>
				</div>
			</div>
			<div id={Style.personal}>
				<p id={Style.firstName}>
					{props.users.firstName}
				</p>
				<p id={Style.lastName}>
					{props.users.lastName}
				</p>
				<p id={Style.status}>
					{props.users.status}
				</p>
			</div>
			<div id={Style.discription}>
				<div id={Style.addDiscription}>
					<img src={AddDiscription} alt=""/>
				</div>
				<p>
					{props.users.discript}
				</p>
				
			</div>
		</div>
		);
}

export default Shapka;