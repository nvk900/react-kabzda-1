import React from 'react';
import Style from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogsItem/DialogsItem';
import MessagesItem from './Message/Message';

const Dialogs = (props) => {


	let dialogElements = props.dialogs.map ( d => <DialogItem name={d.name} id={d.id} />);
	let messageElements = props.messages.map ( m => <MessagesItem message={m.message} />);

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