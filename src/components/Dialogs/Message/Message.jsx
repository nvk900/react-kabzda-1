import React from 'react';
import Style from './../Dialogs.module.css';

const MessagesItem = (props) => {
	let	styleMessage = Style.me;
	if (props.from == 'i'){
		styleMessage = Style.i;
	} 

	return(
		<div className={Style.messageBlock}>
			<div className={`${Style.message} ${styleMessage}`}>
				{props.message}
			</div>
		</div>
		)
	}


export default MessagesItem;