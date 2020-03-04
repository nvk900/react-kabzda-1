import React from 'react';
import Style from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogsItem/DialogsItem';
import MessagesItem from './Message/Message';
import NewMessage from './NewMessage/NewMessage';

const Dialogs = (props) => {

	let dialogElements = props.dialogsPage.dialogs.map ( d => <DialogItem avatar={d.avatar} name={d.name} id={d.id} />);
	let messageElements = props.dialogsPage.messages.map ( m => <MessagesItem from={m.from} message={m.message} />);

	return (
		<div className={Style.dialogs}>
			<div className={Style.dialogsItems}>
				{dialogElements}
			</div>
			<div className={Style.messages}>
				{messageElements}
				<NewMessage newMessageText={props.dialogsPage.newMessageText}
					dispatch={props.dispatch} />
			</div>
		</div>	
	);
}

export default Dialogs;