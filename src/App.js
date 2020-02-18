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
import {BrowserRouter, Route} from 'react-router-dom';

const App = (props) => {
  return (
  	<BrowserRouter>
    <div className='appWrapper'>
      	<Header />
      	<Navbar />
      	<div className="appWrapperContent">
      		<Route path='/profile' component={Profile} />
      		<Route path='/messages' component={Dialogs} />
      		<Route path='/news' component={News} />
      		<Route path='/music' component={Music} />
      		<Route path='/settings' component={Settings} />
      	</div>
    </div>
    </BrowserRouter>
  );
}
export default App;
