import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import '../../style/cardsWeatherWears.css';

const src = 'https://react.semantic-ui.com/images/wireframe/image.png';

class Cloudy extends Component {
  render () {
    return (
      <div className='cloudy'>
        <div className='WeatherClothes'>

          <h1>Our suggestions</h1>
          <img className='humanoid' src={src} alt='texteAlte' />
          <h2>Texte température (c'est froid, pluivieux...)</h2>
          <h4>
            Do not forget to wear ... clothes :
          </h4>
          <div className='clothes'>
            <Image src={src} />
            <Image src={src} />
            <Image src={src} />
            <Image src={src} />
          </div>
        </div>
      </div>
    );
  }
}

export default Cloudy;
