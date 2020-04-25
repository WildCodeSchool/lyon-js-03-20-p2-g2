import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import '../../style/cardsWeatherWears.css';

class Cloudy extends Component {
  render () {
    return (
      <Card className='WeatherWear'>
        <Card.Content>

          <Card.Header>Our suggestion</Card.Header>
          <Image floated='right' size='tiny' src='https://fr.fakenamegenerator.com/images/sil-female.png' alt='texteAlte' />
          <Card.Meta>Texte température (c'est froid, pluivieux...)</Card.Meta>
          <Card.Description className='whatWear'>
            Don't forget to wear ... clothes :
          </Card.Description>
          
        </Card.Content>
      </Card>
    );
  }
}

export default Cloudy;
