import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import '../../style/cardsWeatherWears.css';

const src = 'https://react.semantic-ui.com/images/wireframe/image.png';

class Rainy extends Component {
  render () {
    return (
      <div className='rainy'>
        <div className='weatherCard'>

          <h1>Our suggestions</h1>
          <img className='humanoid' src="https://previews.123rf.com/images/topvectors/topvectors1703/topvectors170301170/74887388-fille-en-manteau-jaune-et-%C3%A9charpe-enfant-en-automne-v%C3%AAtements-en-automne-saison-enjoyingn-pluie-et-temps.jpg" />
          <h2>The weather will be cloudy and overcast, so don't forget to cover yourself, a jacket,some boots will be useful and don't forget your umbrella</h2>
          <h4>  Do not forget to wear ...</h4>
          <div className='clothes'>
            <Image src="https://i.pinimg.com/236x/af/6c/ad/af6cadf5e551eaa1c4cb32f14d9f4d38--image-clipart-cartoon-picture.jpg" />
            <Image src="https://image.freepik.com/vecteurs-libre/parapluie-bleu-realiste_1284-11412.jpg" />
            <Image src="https://t3.ftcdn.net/jpg/02/90/73/20/240_F_290732062_guwcvXbRTLgnsA6lJdHEvm31eWj1vVGR.jpg" />
            
          </div>
        </div>
      </div>
    );
  }
}

export default Rainy;
