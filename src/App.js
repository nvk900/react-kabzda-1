import React from 'react';
import './App.css';
import './logo.png';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

const App = (props) => {
  return (
    <div className='appWrapper'>
      	<Header />
      	<Navbar />
      	<div className="appWrapperContent">
      		{/*<Profile />*/}
      		<Dialogs />
      	</div>
		
		
    </div>
  );
}
export default App;
