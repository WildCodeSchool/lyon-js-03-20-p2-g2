import React from 'react';
import '../style/search-bar.css';
import Meteo from './Meteo';
import { Header, Icon, Card } from 'semantic-ui-react';
import axios from 'axios';
import Loader from '../images/loader.gif';
import citiesList from 'cities.json';

const cities = citiesList.map(element => `${element.name}, ${element.country}`);

const ApiKey = 'AuVbuUjA33sOUpgtpsT4ikQGmaihFztu';
/*
const ApiKey2 = 'sirfH8T9iACEaL6BCh4lj1lcIRyib9nq';
const ApiKey4 = 'o1xPkWaVgHyeSXeWVAFrPulTbebdRtQy';
const ApiKey3 = 'NQVDQY0tgu7YxiI4jwFGl1KbNkm9KYWm';
*/
class SearchBar extends React.Component {
  constructor () {
    super();
    this.state = {
      lat: 0,
      long: 0,
      data: undefined,
      meteoByGeo: false,
      meteoBySearch: false,
      city: '',
      loading: false,
      suggestions: [],
      text: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.cancel = '';
  }

  handleTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = cities.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({ suggestions, text: value }));
  }

  handleSuggestionSelected (value) {
    this.setState(() => ({
      text: value,
      suggestions: []
    }));
  }

  renderSuggestions () {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul className='autocomplete'>
        {suggestions.slice(0, 5).map((item, index) => <li key={index} onClick={() => this.handleSuggestionSelected(item)}>{item}</li>)}
      </ul>
    );
  } // eslint-disable-line

  fetchSearchResults = (city) => {
    const searchCityUrl = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${ApiKey}&q=${city}&language=fr&details=true`;

    if (this.cancel) {
      this.cancel.cancel();
    }

    this.cancel = axios.CancelToken.source();

    axios.get(searchCityUrl, { cancelToken: this.cancel.token })

      .then(res => res.data)
      .then(data => {
        this.setState({ data: data, loading: false });

        fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${data[0].Key}?apikey=${ApiKey}&language=fr-FR&metric=true&details=true`)  /* eslint-disable-line */
          .then(res => res.json())
          .then(data => this.setState({ meteoBySearch: data }));
      })

      .catch(error => {
        if (axios.isCancel(error) || error) {
          this.setState({ loading: false });
        }
      });
  }

  handleChange (event, city) {
    if (event.key === 'Enter') {
      event.preventDefault();
      const city = event.target.value;

      this.setState({ city: city, meteoByGeo: false, loading: true });
      this.fetchSearchResults(city);
    }
  }

  handleClick (e) {
    e.preventDefault();
    this.setState({ meteoBySearch: false, loading: true });
    navigator.geolocation.getCurrentPosition(pos => {
      this.setState({ lat: parseFloat(pos.coords.latitude.toFixed(3)), long: parseFloat(pos.coords.longitude.toFixed(3)), loading: false });

        fetch(`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${ApiKey}&q=${this.state.lat}%2C%20${this.state.long}`) /* eslint-disable-line */

        .then(res => res.json())
        .then(data => {
          this.setState({ data: data });

            fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${data.Key}?apikey=${ApiKey}&language=fr-FR&metric=true&details=true`) /* eslint-disable-line */
            .then(res => res.json())
            .then(data => this.setState({ meteoByGeo: data }));
        });
    });
  }

  render () {
    const { loading } = this.state;
    return (
      <div className='main-search'>

        <form className='search-bar' onSubmit={this.preventSubmit}> { /* eslint-disable-line */}
          <label className='search-label' htmlFor='search-input'>
            <input
              type='text'
              placeholder='Search for....'
              onKeyDown={this.handleChange}
              onChange={this.handleTextChanged}
              value={this.state.text}
            />
            {this.renderSuggestions()}
          </label>
          <button className='geoLocation-input' onClick={this.handleClick}><i className='fas fa-map-marker-alt' /></button>
        </form>

        {/* Loader */}
        <img src={Loader} className={`search-loding ${loading ? 'show' : 'hide'}`} alt='loader' />

        {(this.state.meteoByGeo || this.state.meteoBySearch)
          ? <div className='display-weather'>
            {this.state.meteoByGeo
              ? <Header as='h2' className='title'>
                <Icon name='adjust' />
                <Header.Content>
                  <p> {this.state.meteoByGeo ? this.state.data.EnglishName : ''}</p>
                  <p>{this.state.meteoByGeo ? this.state.data.Country.EnglishName : ''}</p>
                </Header.Content>
              </Header> : ''} { /* eslint-disable-line */}

            <Header as='h2' className='title'>
              <Icon name='adjust' />
              <Header.Content>
                <p> {this.state.meteoBySearch ? this.state.data[0].EnglishName : ''}</p>
                <p>{this.state.meteoBySearch ? this.state.data[0].Country.EnglishName : ''}</p>
              </Header.Content>
            </Header>

            <Card.Group className='cards'>

              {this.state.meteoByGeo ? this.state.meteoByGeo.DailyForecasts.map((meteo, index) => {
                return <Meteo
                  key={index}
                  phrase={meteo.Day.IconPhrase}
                  date={meteo.Date}
                  min={Math.round(meteo.Temperature.Minimum.Value)}
                  max={Math.round(meteo.Temperature.Maximum.Value)}
                  icon={`https://vortex.accuweather.com/adc2010/images/slate/icons/${meteo.Day.Icon}.svg`}
                />; // eslint-disable-line
              }) : ''}

              {this.state.meteoBySearch ? this.state.meteoBySearch.DailyForecasts.map((meteo, index) => {
                return <Meteo
                  key={index}
                  phrase={meteo.Day.IconPhrase}
                  date={meteo.Date}
                  min={Math.round(meteo.Temperature.Minimum.Value)}
                  max={Math.round(meteo.Temperature.Maximum.Value)}
                  icon={`https://vortex.accuweather.com/adc2010/images/slate/icons/${meteo.Day.Icon}.svg`}
                />; // eslint-disable-line
              }) : ''}
            </Card.Group>
          </div> : ''} { /* eslint-disable-line */}

      </div>
    );
  }
}

export default SearchBar;
