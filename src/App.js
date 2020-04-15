import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  render () {
    return (
      <div id='App'>
        <Header />
        <SearchBar />
      </div>
    );
  }
}

export default App;
