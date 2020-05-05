import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ModalSuggestions from './ModalSuggestions';
import Header from './Header';
import '../style/home.css';
import Footer from '../components/Footer';

let className = '';

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      weatherClassName: 'day'
    };
  }

  componentDidMount () {
    this.getWeatherClassName();
  }

  getWeatherClassName () {
    const today = new Date();
    const time = today.getHours();

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
        <ModalSuggestions />
        <Footer />
      </div>
    );
  }
}

export default Home;
