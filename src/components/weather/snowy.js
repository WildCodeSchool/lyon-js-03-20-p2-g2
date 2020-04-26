import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import '../../style/cardsWeatherWears.css';

const src = 'https://react.semantic-ui.com/images/wireframe/image.png';

class Snowy extends Component {
  render () {
    return (
      <div className='wheatherCard'>

        <h1>Our suggestions</h1>
        <img className='humanoid' src={src} alt='humanClothes' />
        <h2>It is cold outside !</h2>
        <h4>
            Do not forget to wear warm clothes :
        </h4>
        <div className='clothes'>
          <Image src={src} />
          <Image src={src} />
          <Image src={src} />
          <Image src={src} />
        </div>

      </div>
    );
  }
}

export default Snowy;
