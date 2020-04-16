import React from 'react';
import './App.css';

import SearchBar from './components/SearchBar';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div id='App'>
        
        <Header />
       
        <SearchBar />
        
      </div>
    );
  }
}

export default App;
