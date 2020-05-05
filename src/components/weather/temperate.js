import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import '../../style/cardsWeatherWears.css';

class Temperate extends Component {
  render () {
    return (
      <div className='temperate'>
        <div className='weatherCard'>
          <h3 className='ourSuggest'>Our suggestions</h3>
          <img className='humanoid' src={require('../../images/image-cold.png')} alt='clothingHuman' />
          <p className='textClothes'>The temperature is moderate today, it is the good moment to go outside if you want to take a walk or practice some sports !
          Feel free to wear comfortable clothes !</p>
          <h4 className='dontForget'>Do not forget to wear ...</h4>
          <div className='clothes'>
            <Image src={require('../../images/tshirt.png')} />
            <Image src={require('../../images/jean.png')} />
            <Image src={require('../../images/sportshoes.png')} />
            <Image src={require('../../images/dress.png')} />
          </div>
        </div>

      </div>
    );
  }
}

export default Temperate;
