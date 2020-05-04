import React from 'react';
import '../style/search-bar.css';
import { Header, Icon, Card } from 'semantic-ui-react';
import axios from 'axios';
import Meteo from './Meteo';
import Weather from './weather/weather';
import Loader from '../images/loader.gif';
import citiesList from 'cities.json';
import weatherIcons from '../weatherIcons.json';

/* Suite import dossier JSON des villes -> je map afin d'obtenir dans un tableau seulement villes et pays */
const cities = citiesList.map(element => `${element.name}, ${element.country}`);
const Apikeyw = 'afd6dc163815a3f489f2782e14afc600';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      city: '',
      lat: 0,
      long: 0,
      meteoByGeo: false,
      meteoBySearch: false,
      loading: false,
      country: '',
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

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul className='autocomplete'>
        {suggestions.slice(0, 3).map((item, index) => <li key={index} onClick={() => this.handleSuggestionSelected(item)}>{item}</li>)}
      </ul>
    );
  } // eslint-disable-line

  /* La méthode handleSuggestionSelected me permet (au click, voir ci-dessous le onClick créé dans la méthode renderSuggestions)
    d'affecter la ville rentrée par l'utilisateur à la propriété 'text' de mon state, et de "vider" ma liste de suggestions.

    Grâce à cette fonction, j'appelle ensuite fetchOnClik qui prend en paramètre 'text' de mon state qui a été updatée avec le click
    de l'utilisateur.
  */

  handleSuggestionSelected(value) {
    this.setState(() => ({
      text: value,
      suggestions: [],
      meteoByGeo: false
    }), () => this.fetchOnClick(this.state.text));
  }

  /* fetchOnclick va nous permettre de faire nos requêtes à l'API.
    Elle prend en paramètre la ville choisie (cliquée) par l'utilisateur et, grâce à cette ville, on va aller chercher la météo correspondante.
    Lorsque l'on a la météo de la ville, on remplace les données de notre propriété meteoBySearch (du state) par les données recueillies par l'API.
  */
  fetchOnClick = (city) => {
    const searchCityUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${Apikeyw}`;

    if (this.cancel) {
      this.cancel.cancel();
    }

    this.cancel = axios.CancelToken.source();

    axios.get(searchCityUrl, { cancelToken: this.cancel.token })

      .then(res => res.data)
      .then(data => {
        this.setState({
          meteoBySearch: {
            city: data.city.name.replace('Arrondissement de', ''),
            country: data.city.country,
            temperature: Math.round(data.list[0].main.temp - 273.15),
            tempmin: Math.floor(data.list[0].main.temp_min - 273.15),
            weatherData: data.list,
            icon: `wi wi-${weatherIcons[data.list[0].weather[0].id].icon}`
          },
          loading: false
        });
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

  handleChange(event, city) {
    if (event.key === 'Enter') {
      event.preventDefault();

      const city = event.target.value;

      this.setState({ city: city, meteoByGeo: false });
      this.fetchSearchResults(city);
    }
  }

  /* La méthode fetchSearchResults va appeler notre API en fonction de la ville choisie par l'utilisateur.
    On va ensuite changer des propriétés de notre afin de permettre l'affichage de la météo (meteoBySearch).
  */

  fetchSearchResults = (city) => {
    const searchCityUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${Apikeyw}`;

    if (this.cancel) {
      this.cancel.cancel();
    }

    this.cancel = axios.CancelToken.source();

    axios.get(searchCityUrl, { cancelToken: this.cancel.token })

      .then(res => res.data)
      .then(data => {
        this.setState({
          meteoBySearch: {
            city: data.city.name.replace('Arrondissement de', ''),
            country: data.city.country,
            temperature: Math.round(data.list[0].main.temp - 273.15),
            tempmin: Math.floor(data.list[0].main.temp_min - 273.15),
            weatherData: data.list,
            icon: `wi wi-${weatherIcons[data.list[0].weather[0].id].icon}`
          },
          loading: false

        });
      })
      .catch(error => {
        if (axios.isCancel(error) || error) {
          this.setState({ loading: false });
        }
      });
  }
  /* .city.name. */
  /* La méthode handleClick va fonctionner la même façon que fetchSearchResults mais au click cette fois.
    Elles va recueillir les coordonnées de l'utilisateur (getCurrentPosition) pour ensuite afficher les données de la météo.
  */

  handleClick(e) {
    e.preventDefault();
    this.setState({ meteoBySearch: false, loading: true });
    navigator.geolocation.getCurrentPosition(pos => {
      this.setState({ lat: parseFloat(pos.coords.latitude.toFixed(3)), long: parseFloat(pos.coords.longitude.toFixed(3)), loading: false });

      const searchCityUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${this.state.lat}&lon=${this.state.long}&appid=${Apikeyw}`;

      if (this.cancel) {
        this.cancel.cancel();
      }

      this.cancel = axios.CancelToken.source();

      axios.get(searchCityUrl, { cancelToken: this.cancel.token })

        .then(res => res.data)
        .then(data => {
          this.setState({
            meteoByGeo: {
              city: data.city.name.replace('Arrondissement de', ''),
              country: data.city.country,
              temperature: Math.round(data.list[0].main.temp - 273.15),
              tempmin: Math.floor(data.list[0].main.temp_min - 273.15),
              weatherData: data.list,
              icon: `wi wi-${weatherIcons[data.list[0].weather[0].id].icon}`
            },
            loading: false
          });
        })

        .catch(error => {
          if (axios.isCancel(error) || error) {
            this.setState({ loading: false });
          }
        });
    });
  }

  render() {
    const { loading } = this.state;
    function icons(meteo) {
      const prefix = 'wi wi-';
      const code = meteo.weather[0].id;
      let icon = weatherIcons[meteo.weather[0].id].icon;

      // If we are not in the ranges mentioned above, add a day/night prefix.
      if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
        return (icon = prefix + 'day-' + icon);
      }
      // Finally tack on the prefix.
      return (icon = prefix + icon);
    }

    return (
      <div className='main-search'>
        {this.state.data}
        <form className='search-bar' onSubmit={this.preventSubmit}> { /* eslint-disable-line */}
          <label className='search-label' htmlFor='search-input'>
            <input
              type='text'
              placeholder='Search for....'
              onKeyDown={this.handleChange}
              onChange={this.handleTextChanged}
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
                  <div>
                    <h1>{this.state.meteoByGeo.city}, {this.state.meteoByGeo.country}</h1>
                    <h2>{this.state.meteoByGeo.temperature}°C</h2>
                    <h2>{<i className={this.state.meteoByGeo.icon} />}</h2>
                  </div>
                </Header.Content>
              </Header> /*  eslint-disable-line */

              : <Header as='h2' className='title'>
                <Icon name='adjust' />
                <Header.Content>
                  {this.state.meteoBySearch &&
                    <div>
                      <h1>{this.state.meteoBySearch.city}, {this.state.meteoBySearch.country}</h1>
                      <h2>{this.state.meteoBySearch.temperature}°C</h2>
                      <h2>{<i className={this.state.meteoBySearch.icon} />}</h2>

                    </div>}
                </Header.Content>
              </Header>} {/*  eslint-disable-line */}

            <Card.Group className='cards'>
              {this.state.meteoByGeo &&
                this.state.meteoByGeo.weatherData
                  .filter(data => data.dt_txt.includes('12:00:00'))
                  .map((meteo, index) => {
                    return <Meteo
                      key={index}
                      phrase={meteo.weather[0].description}
                      date={meteo.dt_txt}
                      min={Math.floor(meteo.main.temp_min - 273.15)}
                      max={Math.ceil(meteo.main.temp_max - 273.15)}
                      icon={icons(meteo)}
                    />; // eslint-disable-line
                  })}

              {this.state.meteoBySearch &&
                this.state.meteoBySearch.weatherData
                  .filter(data => data.dt_txt.includes('12:00:00'))
                  .map((meteo, index) => {
                    return <Meteo
                      key={index}
                      phrase={meteo.weather[0].description}
                      date={meteo.dt_txt}
                      min={Math.floor(meteo.main.temp_min - 273.15)}
                      max={Math.ceil(meteo.main.temp_max - 273.15)}
                      icon={icons(meteo)}
                    />; // eslint-disable-line
                  })}
            </Card.Group>

            {this.state.meteoByGeo &&
              <Weather min={this.state.meteoByGeo.tempmin} />}
            {this.state.meteoBySearch &&
              <Weather min={Math.round(this.state.meteoBySearch.tempmin)} />}
          </div> : ''} { /* eslint-disable-line */}
      </div>
    );
  }
}

export default SearchBar;
