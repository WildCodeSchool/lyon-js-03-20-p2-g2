import React from 'react';
import '../style/search-bar.css';
import Meteo from './Meteo';
import { Header, Icon, Card } from 'semantic-ui-react';
import axios from 'axios';
import Loader from '../images/loader.gif';
import citiesList from 'cities.json';

/* Suite import dossier JSON des villes -> je map afin d'obtenir dans un tableau seulement villes et pays */
const cities = citiesList.map(element => `${element.name}, ${element.country}`);

/* const ApiKey = 'AuVbuUjA33sOUpgtpsT4ikQGmaihFztu'; */
const ApiKey2 = 'sirfH8T9iACEaL6BCh4lj1lcIRyib9nq';
/*
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

  /* La méthode handleTextChanged me permet de faire apparaître l'autocomplete de la façon suivante:
    Si l'utilisateur commence à entrer une ville (length > 1), je vérifie qu'il a bien rentré des caractères de l'alphabet (regex),
    si tel est le cas, j'insère ces villes là dans un tableau (suggestions).
  */

  handleTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = cities.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({ suggestions, text: value }));
  }

  /* La méthode renderSuggestions me permet de mapper les villes et de proposer une liste (ul) de villes correspondant aux premiers
  caractères entrés par l'utilisateur. Au clic sur l'un des choix de ville, j'appelle ensuite handleSuggestionSelected. */

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

  /* La méthode handleSuggestionSelected me permet (au click, voir ci-dessous le onClick créé dans la méthode renderSuggestions) 
    d'affecter la ville rentrée par l'utilisateur à la propriété 'text' de mon state, et de "vider" ma liste de suggestions.

    Grâce à cette fonction, j'appelle ensuite fetchOnClik qui prend en paramètre 'text' de mon state qui a été updatée avec le click 
    de l'utilisateur.
  */

  handleSuggestionSelected (value) {
    this.setState(() => ({
      text: value,
      suggestions: [],
      loading: true,
      meteoByGeo: false
    }));

    this.fetchOnClick(this.state.text);
  }

  /* fetchOnclick va nous permettre de faire nos requêtes à l'API. 
    Elle prend en paramètre la ville choisie (cliquée) par l'utilisateur et, grâce à cette ville, on va aller chercher la météo correspondante.
    Lorsque l'on a la météo de la ville, on remplace les données de notre propriété meteoBySearch (du state) par les données recueillies par l'API.
  */

  fetchOnClick = (city) => {
    const searchCityUrl = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${ApiKey2}&q=${city}&language=fr&details=true`;

    if (this.cancel) {
      this.cancel.cancel();
    }

    this.cancel = axios.CancelToken.source();

    axios.get(searchCityUrl, { cancelToken: this.cancel.token })

      .then(res => res.data)
      .then(data => {
        this.setState({ data: data, loading: false });

        fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${data[0].Key}?apikey=${ApiKey2}&language=fr-FR&metric=true&details=true`)  /* eslint-disable-line */
          .then(res => res.json())
          .then(data => this.setState({ meteoBySearch: data }));
      })

      .catch(error => {
        if (axios.isCancel(error) || error) {
          this.setState({ loading: false });
        }
      });
  }

  /* handleChange est appelé sur l'input (notre barre de recherche) lors d'un évènement keyDown qui va être effectué lors de l'appui sur
    la touche 'Entrée'.
    A ce moment là, je change la 'city' de mon state avec la valeur qu'a entré mon utilisateur.
    J'appelle ensuite fetchSearchResults qui va prendre en paramètre 'city'.
    */

  handleChange (event, city) {
    if (event.key === 'Enter') {
      event.preventDefault();
      const city = event.target.value;

      this.setState({ city: city, meteoByGeo: false, loading: true });
      this.fetchSearchResults(city);
    }
  }

  /* La méthode fetchSearchResults va appeler notre API en fonction de la ville choisie par l'utilisateur.
    On va ensuite changer des propriétés de notre afin de permettre l'affichage de la météo (meteoBySearch).
  */

  fetchSearchResults = (city) => {
    const searchCityUrl = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${ApiKey2}&q=${city}&language=fr&details=true`;

    if (this.cancel) {
      this.cancel.cancel();
    }

    this.cancel = axios.CancelToken.source();

    axios.get(searchCityUrl, { cancelToken: this.cancel.token })

      .then(res => res.data)
      .then(data => {
        this.setState({ data: data, loading: false });

        fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${data[0].Key}?apikey=${ApiKey2}&language=fr-FR&metric=true&details=true`)  /* eslint-disable-line */
          .then(res => res.json())
          .then(data => this.setState({ meteoBySearch: data }));
      })

      .catch(error => {
        if (axios.isCancel(error) || error) {
          this.setState({ loading: false });
        }
      });
  }

  /* La méthode handleClick va fonctionner la même façon que fetchSearchResults mais au click cette fois.
    Elles va recueillir les coordonnées de l'utilisateur (getCurrentPosition) pour ensuite afficher les données de la météo.
  */

  handleClick (e) {
    e.preventDefault();
    this.setState({ meteoBySearch: false, loading: true });
    navigator.geolocation.getCurrentPosition(pos => {
      this.setState({ lat: parseFloat(pos.coords.latitude.toFixed(3)), long: parseFloat(pos.coords.longitude.toFixed(3)), loading: false });

        fetch(`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${ApiKey2}&q=${this.state.lat}%2C%20${this.state.long}`) /* eslint-disable-line */

        .then(res => res.json())
        .then(data => {
          this.setState({ data: data });

            fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${data.Key}?apikey=${ApiKey2}&language=fr-FR&metric=true&details=true`) /* eslint-disable-line */
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
        {loading && <img src={Loader} className='search-loding' alt='loader' />}

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
