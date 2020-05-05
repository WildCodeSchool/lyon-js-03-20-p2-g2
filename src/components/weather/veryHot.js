import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import '../../style/cardsWeatherWears.css';

class VeryHot extends Component {
  render () {
    return (
      <div className='veryHot'>
        <div className='weatherCard'>
          <h3 className='ourSuggest'>Our suggestions</h3>
          <img className='humanoid' src={require('../../images/image-cold.png')} alt='clothingHuman' />
          <p className='textClothes'>It is very hot today, you should go out only if you need to. 
          You must drink a lot of water and find cool places if you go outside.</p>
          <h4 className='dontForget'>Do not forget to bring with you ...</h4>
          <div className='clothes'>
            <Image src={require('../../images/bottle.png')} />
            <Image src={require('../../images/ventilator.png')} />
            <Image src={require('../../images/swimsuit.png')} />
            <Image src={require('../../images/sunscreen.png')} />
          </div>
        </div>

      </div>
    );
  }
}

export default VeryHot;
