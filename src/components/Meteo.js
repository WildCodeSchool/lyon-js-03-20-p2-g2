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
          <Card.Header className='card-phrase-weather'>{moment(this.props.date).format('dddd')}</Card.Header>
          <div className='card-icons'><img src={this.props.icon} alt='icon' /></div>
          <Card.Meta className='card-date'>{capitalize(this.props.phrase)}</Card.Meta>
          {this.props.switch
            ? <Card.Description className='card-temperatures'>
              {Math.round(this.props.min * 9 / 5) + 32}°F | {Math.round(this.props.max * 9 / 5) + 32}°F
              </Card.Description> /*  eslint-disable-line */
            : <Card.Description className='card-temperatures'>
              <span title='Minimal temperature'>{this.props.min}°C</span> | <span title='Maximal temperature'>{this.props.max}°C</span>
            </Card.Description>} {/*  eslint-disable-line */}
        </Card.Content>
      </Card>
    );
  }
}

export default Meteo;

moment();
