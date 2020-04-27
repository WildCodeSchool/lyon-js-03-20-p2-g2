import React, { Component } from 'react';
import Cold from './cold';
import Snowy from './snowy';
import Sunny from './sunny';
import Rainy from './rain';

let clothes = '';

class Weather extends Component {
  componentDidMount = () => {
    const temperature = this.props.min;

    if (temperature >= 6 && temperature < 12) {
      clothes = <Cold />;
    } else if (temperature <= 3 && temperature < -20) {
      clothes = <Snowy />;
    } else if (temperature >= 3 && temperature <= 15) {
      clothes = <Rainy />;
    } else if (temperature >= 20 && temperature < 30) {
      clothes = <Sunny />;
    }
  }

  render () {
    return (
      <div>{clothes}</div>
    );
  }
  this.setState({
    weatherClassName: className
  });
}


export default Weather;
