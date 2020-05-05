import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import '../../style/cardsWeatherWears.css';

class Rainy extends Component {
  render() {
    return (
      <div className='rainy'>
        <div className='weatherCard'>
          <h3 className='ourSuggest'>Our suggestions</h3>
          <img className='humanoid' src={require('../../images/gif/rainy1.gif')} alt='clothingHuman' />
          <p className='textClothes'>The weather will be cloudy and overcast, so don't forget to cover yourself, a jacket, some boots will be useful and don't forget your umbrella</p>
          <h4 className='dontForget'>Do not forget to wear ...</h4>
          <div className='clothes'>
            <Image src={require('../../images/rain-boots.png')} />
            <Image src={require('../../images/umbrella.png')} />
            <Image src={require('../../images/rain-coat.png')} />

          </div>
        </div>
      </div>
    );
  }
}

export default Rainy;
