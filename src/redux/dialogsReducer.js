const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
	dialogs: [
		{id:'1', avatar: 'https://99px.ru/sstorage/1/2019/07/image_10507191802546189824.jpg', name: 'Dimych'},
		{id:'2', avatar: 'https://99px.ru/sstorage/1/2019/07/image_10507191802546189824.jpg', name: 'Andrey'},
		{id:'3', avatar: 'https://99px.ru/sstorage/1/2019/07/image_10507191802546189824.jpg', name: 'Vasiliy'},
		{id:'4', avatar: 'https://99px.ru/sstorage/1/2019/07/image_10507191802546189824.jpg', name: 'Vladimir'},
		{id:'5', avatar: 'https://99px.ru/sstorage/1/2019/07/image_10507191802546189824.jpg', name: 'Anastasiya'},
		{id:'6', avatar: 'https://99px.ru/sstorage/1/2019/07/image_10507191802546189824.jpg', name: 'Julia'}
	],

	messages: [
		{id: '1', from: 'me', message: 'Hi'},
		{id: '2', from: 'i', message: 'How is you'},
		{id: '3', from: 'me', message: 'Yo'},
		{id: '4', from: 'me', message: 'Vladimir salu'},
		{id: '5', from: 'i', message: 'Darovenko'},
		{id: '6', from: 'i', message: 'Dratuti'}
	],
	newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

	switch (action.type) {

		case ADD_MESSAGE:
			let idNewMessage = state.messages.length + 1; 

			let newMessage = {
				id: idNewMessage,
				from: 'i',
				message: state.newMessageText
			}

			state.messages.push(newMessage);
			state.newMessageText = '';
			return state;

		case UPDATE_NEW_MESSAGE_TEXT:

			state.newMessageText = action.newText;
			return state;

		default:

			return state;
	}
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export let updateNewMessageTextActionCreator = (text) => ({
	type: UPDATE_NEW_MESSAGE_TEXT, 
	newText: text 
});

export default dialogsReducer;