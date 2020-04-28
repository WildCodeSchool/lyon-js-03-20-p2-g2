import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import '../../style/cardsWeatherWears.css';

class Snowy extends Component {
  render () {
    return (
      <div className='snowy'>
        <div className='weatherCard'>

          <h1 className='ourSuggest'>Our suggestions</h1>
          <img className='humanoid' src={require('../../images/image-snow.png')} alt='clothingHuman' />
          <h2 className='textClothes'>The weather will be snowy and cold, so don't forget to cover yourself with a jacket, a hat and a scarf. Let it snow!</h2>
          <h4 className='dontForget'> Do not forget to wear ...</h4>
          <div className='clothes'>
            <Image src={require('../../images/snow-boots.jpg')} />
            <Image src={require('../../images/gloves.jpg')} />
            <Image src={require('../../images/bonnet.jpg')} />
            <Image src={require('../../images/coat.jpg')} />
          </div>
        </div>
      </div>
    );
  }
}

export default Snowy;
