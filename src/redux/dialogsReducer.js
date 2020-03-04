const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {

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