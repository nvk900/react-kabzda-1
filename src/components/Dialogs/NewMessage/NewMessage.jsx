import React from 'react';
import Style from './NewMessage.module.css';

const NewMessage = (props) => {
	let newMessageElement = React.createRef(); //Ссылка на обьект jsx

	let addMessage = () => {
		let text = newMessageElement.current.value; //обращение к DOM элементу напрямую (нужно обращаться к virtualDOM)
		alert(text);
	}

	return(
		<div className={Style.newMessageBlock}>
			<h3>Cообщение</h3>
			<div className={Style.textareaBlock}>
				<textarea ref={newMessageElement} rows="5" name="text"></textarea>
			</div>
			
			<button>Добавить фото</button>
			<button onClick={addMessage} >Опубликовать</button>
		</div>
		)
	}


export default NewMessage;