import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import '../../style/cardsWeatherWears.css';

class Rainy extends Component {
  render () {
    return (
      <div className='rainy'>
        <div className='weatherCard'>

          <h1 className='ourSuggest'>Our suggestions</h1>
          <img className='humanoid' src={require('../../images/image-rain.png')}  alt='clothingHuman' />
          <h2 className='textClothes'>The weather will be cloudy and overcast, so don't forget to cover yourself, a jacket,some boots will be useful and don't forget your umbrella</h2>
          <h4 className='dontForget'>  Do not forget to wear ...</h4>
          <div className='clothes'>
            <Image src={require('../../images/rain-boots.jpg')} />
            <Image src={require('../../images/umbrella.jpg')} />
            <Image src={require('../../images/rain-coat.jpg')} />

          </div>
        </div>
      </div>
    );
  }
}

export default Rainy;
