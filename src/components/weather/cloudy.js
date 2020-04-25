import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import '../../style/cardsWeatherWears.css';

class Cloudy extends Component {
  render () {
    return (
      <Card className='WeatherWear'>
        <Card.Content>

          <Card.Header>CARD HEADER</Card.Header>
          <Image floated='right' size='tiny' src='https://fr.fakenamegenerator.com/images/sil-female.png' alt='texteAlte' />
          <Card.Meta>CARD META</Card.Meta>
          <Card.Description>
            TEXTE DESCRIPTION
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default Cloudy;
