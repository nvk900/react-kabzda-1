import React from 'react';
import Style from './NewMessage.module.css';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from './../../../redux/dialogsReducer';

const NewMessage = (props) => {
	

	let addMessage = () => {
		let action = addMessageActionCreator();
		props.dispatch(action);
	}
	let onMessageChange = (e) => {
		let text = e.target.value;
		let action = updateNewMessageTextActionCreator(text);
		props.dispatch(action);
	}

	return(
		<div className={Style.newMessageBlock}>
			<h3>Cообщение</h3>
			<div className={Style.textareaBlock}>
				<textarea onChange={onMessageChange}
					rows="5" 
					value={props.newMessageText} 
					placeholder='Введите сообщение'/>
			</div>
			
			<button>Добавить фото</button>
			<button onClick={addMessage} >Опубликовать</button>
		</div>
		)
	}


export default NewMessage;