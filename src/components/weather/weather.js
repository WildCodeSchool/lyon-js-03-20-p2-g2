import React, { Component } from 'react';
import Cold from '../components/weather/cold';
import Rainy from '../components/weather/rain';
import Sunny from '../components/weather/sunny';
import Snowy from '../components/weather/snowy';


}
getWeatherClassName () {
  const today = new Date();
  const degres = today.getTemperature();
  // let time = 1;

  if (degres >= 6 && time < 12) {
    className = 'sunny';
  } else if (degres >= 12 && time < 18) {
    className = 'snowy';
  } else if (degres >= 18 && time <= 23) {
    className = 'cold';
  } else if (degres >= 0 && time < 6) {
    className = 'rainy';
  }
  this.setState({
    weatherClassName: className
  });
}


export default Weather;
