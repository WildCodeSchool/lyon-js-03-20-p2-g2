import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import '../../style/cardsWeatherWears.css';

class VeryHot extends Component {
  render () {
    return (
      <div className='veryHot'>
        <div className='weatherCard'>
          <h1 className='ourSuggest'>Our suggestions</h1>
          <img className='humanoid' src={require('../../images/image-cold.png')} alt='clothingHuman' />
          <h2 className='textClothes'>Il fait chaud</h2>
          <h4 className='dontForget'>Do not forget to wear ...</h4>
          <div className='clothes'>
            <Image src={require('../../images/bonnet.png')} />
            <Image src={require('../../images/coat.png')} />
            <Image src={require('../../images/gloves.png')} />
            <Image src={require('../../images/scarf.png')} />
          </div>
        </div>

      </div>
    );
  }
}

export default VeryHot;
