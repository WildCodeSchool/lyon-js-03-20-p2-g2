import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import '../../style/cardsWeatherWears.css';

class Sunny extends Component {
  render () {
    return (
      <div className='sunny'>
        <div className='weatherCard'>
          <h3 className='ourSuggest'>Our suggestions</h3>
          <img className='humanoid' src={require('../../images/image-sunny.png')} alt='clothingHuman' />
          <p className='textClothes'>The weather will be sunny so don't cover yourself too much but protect you skin and don't forget your glasses</p>
          <h4 className='dontForget'>Do not forget to wear ...</h4>
          <div className='clothes'>
            <Image src={require('../../images/tee-shirt.jpg')} />
            <Image src={require('../../images/casquette.jpg')} />
            <Image src={require('../../images/sunscreen.jpg')} />
            <Image src={require('../../images/sunglasses.jpg')} />
          </div>
        </div>
      </div>
    );
  }
}

export default Sunny;
