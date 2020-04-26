import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import ModalSuggestions from '../components/ModalSuggestions';
import Header from '../components/Header';
import '../style/home.css';
import Cloudy from '../components/weather/cloudy';
import Rainy from '../components/weather/rain';
import Sunny from '../components/weather/sunny';
import Snowy from '../components/weather/snowy';

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
    const today = new Date();
    const time = today.getHours();
    // let time = 1;

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
        <SearchBar />
        <Snowy />
        <ModalSuggestions />
      </div>
    );
  }
}

export default Home;
