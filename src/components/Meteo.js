import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import moment from 'moment';
import 'moment/locale/fr';
import '../style/Meteo.css';



moment.locale('en-US');

class Meteo extends Component {
  capitalize(a) {
    return (a + '').charAt(0).toUpperCase() + a.substr(1);
  }
  render() {
    return (
      <Card className='Meteo'>
        <Card.Content>

          <Card.Header>{this.capitalize(this.props.phrase)}</Card.Header>
          <div>{this.props.icon}</div>
          <Card.Meta>{moment(this.props.date).format('dddd')}</Card.Meta>
          <Card.Description>
            {this.props.min}° | {this.props.max}°
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default Meteo;

moment();
