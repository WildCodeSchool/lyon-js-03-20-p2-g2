import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import '../../style/cardsWeatherWears.css';

class Temperate extends Component {
  render () {
    return (
      <div className='temperate'>
        <div className='weatherCard'>
          <h1 className='ourSuggest'>Our suggestions</h1>
          <img className='humanoid' src={require('../../images/image-cold.png')} alt='clothingHuman' />
          <h2 className='textClothes'>Il fait bon</h2>
          <h4 className='dontForget'>Do not forget to wear ...</h4>
          <div className='clothes'>
            <Image src={require('../../images/bonnet.jpg')} />
            <Image src={require('../../images/coat.jpg')} />
            <Image src={require('../../images/gloves.jpg')} />
            <Image src={require('../../images/scarf.jpg')} />
          </div>
        </div>

      </div>
    );
  }
}

export default Temperate;
