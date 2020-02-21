import React from 'react';
import Style from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogsItem/DialogsItem';
import MessagesItem from './Message/Message';

const Dialogs = (props) => {

	let dialogs = [
		{id:'1', name: 'Dimych'},
		{id:'2', name: 'Andrey'},
		{id:'3', name: 'Vasiliy'},
		{id:'4', name: 'Vladimir'},
		{id:'5', name: 'Anastasiya'},
		{id:'6', name: 'Julia'}
		]
	let messages = [
		{id: '1', message: 'Hi'},
		{id: '2', message: 'How is you'},
		{id: '3', message: 'Yo'},
		{id: '4', message: 'Vladimir salu'},
		{id: '5', message: 'Darovenko'},
		{id: '6', message: 'Dratuti'}
		]

	let dialogElements = dialogs.map ( d => <DialogItem name={d.name} id={d.id} />);
	let messageElements = messages.map ( m => <MessagesItem message={m.message} />);

	return (
		<div className={Style.dialogs}>
			<div className={Style.dialogsItems}>
				{dialogElements}
			</div>
			<div className={Style.messages}>
				{messageElements}
			</div>
		</div>	
	);
}

export default Dialogs;