import React from 'react';
import '../style/search-bar.css';

import { Header, Icon } from 'semantic-ui-react';

import Loader from '../images/loader.gif';
import citiesList from 'cities.json';

/* Suite import dossier JSON des villes -> je map afin d'obtenir dans un tableau seulement villes et pays */
const cities = citiesList.map(element => `${element.name}, ${element.country}`);
const Apikeyw = 'afd6dc163815a3f489f2782e14afc600';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 0,
      long: 0,
      meteoByGeo: false,
      meteoBySearch: {},
      loading: false,
      city: '',
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
    }));

    this.fetchOnClick(this.state.text);
  }

  /* fetchOnclick va nous permettre de faire nos requêtes à l'API.
    Elle prend en paramètre la ville choisie (cliquée) par l'utilisateur et, grâce à cette ville, on va aller chercher la météo correspondante.
    Lorsque l'on a la météo de la ville, on remplace les données de notre propriété meteoBySearch (du state) par les données recueillies par l'API.
  */
  fetchOnClick = (city) => {
    const searchCityUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${Apikeyw}`;
    fetch(searchCityUrl)          /* eslint-disable-line */
      .then(res => res.json())   /* eslint-disable-line */
      .then(data => {

        this.setState({
          meteoBySearch: {
            city: data.city.name,
            country: data.city.country,
            temperature: (data.list[0].main.temp.toFixed(0) - 273)

          }
        });
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

  fetchSearchResults = city => {
    const searchCityUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${Apikeyw}`;
    fetch(searchCityUrl)/* eslint-disable-line */
      .then(res => res.json())
      .then(data => {
        this.setState({
          meteoBySearch: {
            city: data.city.name,
            country: data.city.country,
            temperature: (data.list[0].main.temp.toFixed(0) - 273)

          }
        });
      });
  };

  /* .city.name. */
  /* La méthode handleClick va fonctionner la même façon que fetchSearchResults mais au click cette fois.
    Elles va recueillir les coordonnées de l'utilisateur (getCurrentPosition) pour ensuite afficher les données de la météo.
  */

  handleClick(e) {
    e.preventDefault();
    this.setState({ meteoBySearch: false, loading: true });
    navigator.geolocation.getCurrentPosition(pos => {
      this.setState({ lat: parseFloat(pos.coords.latitude.toFixed(3)), long: parseFloat(pos.coords.longitude.toFixed(3)), loading: false });

      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.state.lat}&lon=${this.state.long}&apikey=${Apikeyw}`) /* eslint-disable-line */

        .then(res => res.json())
        .then(data => {
          this.setState({
            meteoBySearch: {
              city: data.city.name,
              country: data.city.country,
              temperature: (data.list[0].main.temp.toFixed(0) - 273)

            },
            loading: false
          });
        });
    });
  }

  render() {
    const { loading } = this.state;
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

                <p>{this.state.meteoBySearch ? this.state.meteoBySearch.city : ''}</p>

                <p>{this.state.meteoBySearch ? this.state.meteoBySearch.temperature : ''}</p>
              </Header.Content>
            </Header>

          </div> : ''} { /* eslint-disable-line */}

      </div>
    );
  }
}

export default SearchBar;
