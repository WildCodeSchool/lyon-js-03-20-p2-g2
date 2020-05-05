import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import '../../style/cardsWeatherWears.css';

class Cold extends Component {
  render() {
    return (
      <div className='cold'>
        <div className='weatherCard'>
          <h1 className='ourSuggest'>Our suggestions</h1>
          <img className='humanoid' src={require('../../images/gif/link-cold.gif')} alt='clothingHuman' />
          <h2 className='textClothes'>The weather will be cloudy and overcast, so don't forget to cover yourself, a jacket, a hat and a scarf will be useful</h2>
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

export default Cold;
