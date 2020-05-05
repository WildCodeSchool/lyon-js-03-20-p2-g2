import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import '../../style/cardsWeatherWears.css';

class Sunny extends Component {
  render () {
    return (
      <div className='sunny'>
        <div className='weatherCard'>

          <h1 className='ourSuggest'>Our suggestions</h1>
          <img className='humanoid' src={require('../../images/image-sunny.png')} alt='clothingHuman' />
          <h2 className='textClothes'>The weather will be sunny so don't cover yourself too much but protect you skin and don't forget your glasses</h2>
          <h4 className='dontForget'>Do not forget to wear ...</h4>
          <div className='clothes'>
            <Image src={require('../../images/tee-shirt.png')} />
            <Image src={require('../../images/casquette.png')} />
            <Image src={require('../../images/sunscreen.png')} />
            <Image src={require('../../images/sunglasses.png')} />
          </div>
        </div>
      </div>
    );
  }
}

export default Sunny;
