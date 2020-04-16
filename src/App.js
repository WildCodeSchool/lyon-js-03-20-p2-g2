import React from 'react'
import './App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ModalSuggestions from './components/ModalSuggestions'

class App extends React.Component {
  render () {
    return (
      <div id='App'>
        <Header />
        <SearchBar />
        <ModalSuggestions />
      </div>
    )
  }
}

export default App
