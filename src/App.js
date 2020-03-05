import React from 'react';
import './App.css';
import './logo.png';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Route} from 'react-router-dom';

const App = (props) => {
  return (
    <div className='appWrapper'>
      	<Header />
      	<Navbar state={props.store.sidebar} />
      	<div className="appWrapperContent">
      		<Route path='/profile' render= {() => 
            <Profile 
              profilePage={props.store.profilePage} 
              store={props.store}
              dispatch={props.dispatch}
            />} 
          />
      		<Route path='/messages' render= {() => 
            <Dialogs 
              dialogsPage={props.store.dialogsPage}
              dispatch={props.dispatch} 
            />} 
          />
      		<Route path='/news' render= {() => 
            <News />} />
      		<Route path='/music' render= {() => 
            <Music />} />
      		<Route path='/settings' render= {() => 
            <Settings />} />
      	</div>
    </div>
  );
}
export default App;
