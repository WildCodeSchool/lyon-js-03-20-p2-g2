import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import ModalSuggestions from '../components/ModalSuggestions';
import '../style/home.css';
import Header from '../components/Header';

let className = '';

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      weatherClassName: 'day'
    };
  }

  componentWillMount () {
    this.getWeatherClassName();
  }

  getWeatherClassName () {
    let today = new Date()
    let time = today.getHours();
    //let time = 1;

    if (time >= 6 && time < 12) {
      className = 'aube';
    } else if (time >= 12 && time < 18) {
      className = 'day';
    } else if (time >= 18 && time <= 23) {
      className = 'dusk';
    } else if (time >= 0 && time < 6) {
      className = 'night';
    }
    this.setState({
      weatherClassName: className
    });
  }

  render () {
    return (
      <div className={this.state.weatherClassName}>
        <Header />
        <ModalSuggestions />
        <SearchBar />
      </div>
    );
  }
}

export default Home;
