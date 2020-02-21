import React from 'react';
import Style from './../Dialogs.module.css';

const MessagesItem = (props) => {

	return(
		<div className={Style.message}>
			{props.message}
		</div>
		)
	}


export default MessagesItem;