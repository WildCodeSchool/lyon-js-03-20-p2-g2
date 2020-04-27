import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import '../../style/cardsWeatherWears.css';

class Sunny extends Component {
  render () {
    return (
      <div className='sunny'>
        <div className='weatherCard'>

          <h1 className='ourSuggest'>Our suggestions</h1>
          <img className='humanoid' src='https://www.rkj.fr/wp-content/uploads/2015/07/soleil.jpg' />
          <h2 className='textClothes'>The weather will be sunny so don't cover yourself too much but protect you skin and don't forget your glasses </h2>
          <h4 className='dontForget'>Do not forget to wear ...</h4>
          <div className='clothes'>
            <Image src='https://t3.ftcdn.net/jpg/03/20/53/92/240_F_320539215_STyZtOQDktFBj5EEwJ5f9xgVrlYUfkNy.jpg' />
            <Image src='https://www.cdiscount.com/pdt2/0/6/7/1/300x300/sym4061703509067/rw/lunettes-de-soleil-corrigees-verres-interchangea.jpg' />
            <Image src='https://www.cdiscount.com/pdt2/0/9/8/1/700x700/tom8719704562098/rw/tommy-hilfiger-classic-bb-cap-casquette-femme-ta.jpg' />
            <Image src='https://static.vecteezy.com/system/resources/previews/000/328/682/non_2x/sunscreen-tube-flat-icon-vector.jpg' />
          </div>
        </div>
      </div>
    );
  }
}

export default Sunny;
