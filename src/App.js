import React from 'react';
import './App.css';
import Burger from './components/Burger';

function App() {
  return (
    <div id="App" >
      <button>Click</button>
      <div className="header">

        <h2>Weather Suggest</h2>
        <img className="menu-logo-img" src={require('./images/logo.png')} alt="logo" />
      </div>

      <Burger />
    </div>
  );
}
export default App;
