import React, { Component } from 'react';
import { Card, Image, Grid } from 'semantic-ui-react';
import _ from 'lodash';
import '../../style/cardsWeatherWears.css';

const columns = _.times(5, (i) => (
  <Grid.Column key={i}>
    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
  </Grid.Column>
));

const GridExampleGrid = () => <Grid>{columns}</Grid>;

class Cloudy extends Component {
  render () {
    return (
      <Card className='WeatherWear'>
        <Card.Content>

          <Card.Header>Our suggestion</Card.Header>
          <Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' alt='texteAlte' />
          <Card.Meta>Texte température (c'est froid, pluivieux...)</Card.Meta>
          <Card.Description className='whatWear'>
            Don't forget to wear ... clothes :
          </Card.Description>
          <GridExampleGrid />
        </Card.Content>
      </Card>
    );
  }
}

export default Cloudy;
