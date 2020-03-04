import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/reduxStore';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
// import state, {updateNewPostText, addPost, subscribe} from './redux/state';


let rerenderEntireTree = (state) => {
	debugger;
	ReactDOM.render(
		<BrowserRouter>
			<App state={state} dispatch={store.dispatch.bind(store)}/>
		</BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe( () => {
	let state = store.getState();
	rerenderEntireTree(state)
} );

// posts={posts} dialogs={dialogs} messages={messages}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
