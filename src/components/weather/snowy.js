import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import '../../style/cardsWeatherWears.css';

class Snowy extends Component {
  render () {
    return (
      <div className='snowy'>
        <div className='weatherCard'>

          <h1 className='ourSuggest'>Our suggestions</h1>
          <img className='humanoid' src='https://image.freepik.com/free-vector/_58813-296.jpg' alt='clothingHuman' />
          <h2 className='textClothes'>The weather will be snowy and cold, so don't forget to cover yourself with a jacket, a hat and a scarf.Let it snow!</h2>
          <h4 className='dontForget'> Do not forget to wear ...</h4>
          <div className='clothes'>
            <Image src='https://www.cdiscount.com/pdt2/7/6/9/1/700x700/mp07051769/rw/kimberfeel-bottes-apres-ski-loris-homme-beige.jpg' />
            <Image src='http://ekladata.com/iJn60fMlLozKiEcOUdg3NmXDf4Q@191x191.jpg' />
            <Image src='http://ekladata.com/bNcVLzV0965u0CkVBnymSY15oKw@211x211.jpg' />
            <Image src='https://media.istockphoto.com/vectors/mitten-winter-glove-line-icon-outline-vector-sign-linear-pictogram-vector-id689121152' />
          </div>
        </div>
      </div>
    );
  }
}

export default Snowy;
