import React from 'react';
import { Image } from 'semantic-ui-react';
import '../style/cardsWeatherWears.css';

function Weather (props) {
  return (
    <div className='Weather'>
      <div className='weatherCard'>
        <h3 className='ourSuggest'>Our suggestions</h3>
        <img className='humanoid' src={props.img} alt='clothingHuman' />
        <p className='textClothes'>{props.p}</p>
        <h4 className='dontForget'>Do not forget to wear ...</h4>
        <div className='clothes'>
          <Image src={props.img1} />
          <Image src={props.img2} />
          <Image src={props.img3} />
          <Image src={props.img4} />
        </div>
      </div>
    </div>
  );
}

export default Weather;
