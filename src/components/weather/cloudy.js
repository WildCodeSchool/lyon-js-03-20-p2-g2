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

{/* <Card className='WeatherWear'>
<Card.Content>

  <Card.Header>Our suggestion</Card.Header>
  <img size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' alt='texteAlte' />
  <Card.Meta>Texte température (c'est froid, pluivieux...)</Card.Meta>
  <Card.Description className='whatWear'>
    Don't forget to wear ... clothes :
  </Card.Description>
  <Truc />
</Card.Content>
</Card>
);
} */}