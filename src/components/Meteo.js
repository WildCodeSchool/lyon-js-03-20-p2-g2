import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import moment from 'moment';
import 'moment/locale/fr';
import '../style/Meteo.css';

moment.locale('en-US');

class Meteo extends Component {
  render () {
    const capitalize = (a) => {
      return (a + '').charAt(0).toUpperCase() + a.substr(1);
    };
    return (
      <Card className='Meteo'>
        <Card.Content>
          <Card.Header className='card-phrase-weather'>{capitalize(this.props.phrase)}</Card.Header>
          <div className='card-icons'><i className={this.props.icon} /></div>
          <Card.Meta className='card-date'>{moment(this.props.date).format('dddd')}</Card.Meta>
          <Card.Description className='card-temperatures'>
            {this.props.min}°C | {this.props.max}°C
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default Meteo;

moment();
