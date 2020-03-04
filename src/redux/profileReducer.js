const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
	switch(action.type) {

		case ADD_POST:
			let idNewPost = state.posts.length + 1; 
			let newPost = {
				id: idNewPost, 
				likesCounts: 0, 
				img:'', 
				message: state.newPostText
			}
			state.posts.push(newPost);
			state.newPostText = '';
			return state;

		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText;
			return state;

		default:
			return state;
	}
	
}

export const addPostActionCreator = () => ({type: ADD_POST})
export let updateNewPostTextActionCreator = (text) => ({
	type: UPDATE_NEW_POST_TEXT, 
	newText: text
});

export default profileReducer;