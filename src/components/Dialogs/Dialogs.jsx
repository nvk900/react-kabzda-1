import React from 'react';
import Style from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogsItem/DialogsItem';
import MessagesItem from './Message/Message';

const Dialogs = (props) => {

	let dialogElements = props.state.dialogs.map ( d => <DialogItem avatar={d.avatar} name={d.name} id={d.id} />);
	let messageElements = props.state.messages.map ( m => <MessagesItem from={m.from} message={m.message} />);

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