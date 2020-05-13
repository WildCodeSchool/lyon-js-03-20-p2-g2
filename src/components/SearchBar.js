import React from 'react';
import '../style/search-bar.css';
import { Card, Header } from 'semantic-ui-react';
import axios from 'axios';
import Meteo from './Meteo';
import SuggestionsList from './SuggestionsList';
import citiesList from 'cities.json';
import Pollution from './Pollution';
import CircularProgress from '@material-ui/core/CircularProgress';
import FavoriteItem from './FavoriteItem';
import WeatherDetails from './WeatherDetails';
import Alerts from './Alerts';
import moment from 'moment';

/* Suite import dossier JSON des villes -> je map afin d'obtenir dans un tableau seulement villes et pays */
const cities = citiesList.map(element => `${element.name}, ${element.country}`);
const Apikeyw = 'afd6dc163815a3f489f2782e14afc600';
const keyAQI = 'a21a5dc572269b362928535f3857be9975516906';
const keyDarkSky = 'cfeed98eb60dc557187a9ea2c357cd52';

class SearchBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      city: '',
      lat: 0,
      long: 0,
      weatherForecast: false,
      loading: false,
      country: '',
      suggestions: [],
      text: '',
      AQI: null,
      pollutionIndex: null,
      favorites: [],
      liked: null,
      errorMessage: false,
      alerts: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.cancel = '';
  }

  /* La méthode handleTextChanged me permet de faire apparaître l'autocomplete de la façon suivante:
    Si l'utilisateur commence à entrer une ville (length > 1), je vérifie qu'il a bien rentré des caractères de l'alphabet (regex),
    si tel est le cas, j'insère ces villes là dans un tableau (suggestions). */

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
        {suggestions.slice(0, 3).map((item, index) => <li key={index} onClick={() => this.handleSuggestionSelected(item)}>{item}</li>)}
      </ul>
    );
  }

  /* La méthode handleSuggestionSelected me permet (au click, voir ci-dessous le onClick créé dans la méthode renderSuggestions)
    d'affecter la ville rentrée par l'utilisateur à la propriété 'text' de mon state, et de "vider" ma liste de suggestions.
    Grâce à cette fonction, j'appelle ensuite fetchOnClik qui prend en paramètre 'text' de mon state qui a été updatée avec le click
    de l'utilisateur. */

  async handleSuggestionSelected (value) {
    await this.setState(() => ({
      text: value,
      suggestions: [],
      forecast: false,
      alerts: null
    }), () => this.fetchOnClick(this.state.text));
  }

  /* fetchOnclick va nous permettre de faire nos requêtes à l'API.
    Elle prend en paramètre la ville choisie (cliquée) par l'utilisateur et, grâce à cette ville, on va aller chercher la météo correspondante.
    Lorsque l'on a la météo de la ville, on remplace les données de notre propriété meteoBySearch (du state) par les données recueillies par l'API. */

  async fetchOnClick (city) {
    const { favorites } = this.state;

    const searchCityUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${Apikeyw}`;

    await axios.get(searchCityUrl, { cancelToken: this.cancel.token })
      .then(res => res.data)
      .then(data => {
        this.setState({
          weatherForecast: {
            city: data.city.name.replace('Arrondissement de ', ''),
            country: data.city.country,
            sunrise: data.city.sunrise,
            sunset: data.city.sunset,
            temperature: Math.round(data.list[0].main.temp - 273.15),
            feelslike: Math.round(data.list[0].main.feels_like - 273.15),
            tempmin: Math.round(data.list[0].main.temp_min - 273.15),
            tempmax: Math.round(data.list[0].main.temp_max - 273.15),
            pressure: data.list[0].main.pressure,
            humidity: data.list[0].main.humidity,
            wind: data.list[0].wind.speed,
            icon: data.list[0].weather[0].icon,
            main: data.list[0].weather[0].main,
            weatherData: data.list,
            lat: data.city.coord.lat,
            lon: data.city.coord.lon
          },
          loading: false,
          suggestions: [],
          errorMessage: false
        }, () => this.setState({ text: this.state.weatherForecast.city }));
      })
      .catch(error => {   /* eslint-disable-line */
        console.log('Please search again...');
        this.setState({ errorMessage: true });
      });

    if (!favorites.some(alreadyFavorite => alreadyFavorite.toLowerCase() === this.state.text.toLowerCase())) {
      this.setState({ liked: null });
    } else {
      this.setState({ liked: 'yes' });
    }

    const dataPollution = await axios.get(`https://api.waqi.info/feed/${this.state.weatherForecast.city}/?token=${keyAQI}`).then(res => res.data)
      .catch(error => this.setState({ errorMessage: true })); /* eslint-disable-line */

    dataPollution.data.aqi &&
      this.setState({
        test: dataPollution.data,
        AQI: dataPollution.data.aqi,
        pollutionIndex: {
          NO2: (dataPollution.data.iaqi.no2 ? dataPollution.data.iaqi.no2.v : 'no data'),
          O3: (dataPollution.data.iaqi.o3 ? dataPollution.data.iaqi.o3.v : 'no data'),
          PM10: (dataPollution.data.iaqi.pm10 ? dataPollution.data.iaqi.pm10.v : 'no data')
        }
      });

    axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${keyDarkSky}/${this.state.weatherForecast.lat},${this.state.weatherForecast.lon}`)
      .then(res => res.data)
      .then(data => {
        data.alerts &&
      this.setState({
        alerts: {
          title: data.alerts[0].title,
          description: data.alerts[0].description,
          regions: data.alerts[0].regions,
          severity: data.alerts[0].severity,
          url: data.alerts[0].uri
        }
      });
      });
  }

  /* handleChange est appelé sur l'input (notre barre de recherche) lors d'un évènement keyDown qui va être effectué lors de l'appui sur la touche 'Entrée'.
    A ce moment là, je change la 'city' de mon state avec la valeur qu'a entré mon utilisateur.
    J'appelle ensuite fetchSearchResults qui va prendre en paramètre 'city'. */

  handleChange (event, city) {
    if (event.key === 'Enter') {
      event.preventDefault();
      const city = event.target.value;
      this.setState({ city: city, weatherForecast: false, AQI: null, forecast: false });
      this.fetchOnClick(city);
      event.target.blur();
    }
  }

  /* La méthode handleClick va fonctionner la même façon que fetchOnClick mais au click cette fois.
    Elles va recueillir les coordonnées de l'utilisateur (getCurrentPosition) pour ensuite afficher les données de la météo. */

  async handleClick (e) {
    e.preventDefault();
    const { favorites } = this.state;
    this.setState({ weatherForecast: false, AQI: null, loading: true, alerts: null });
    navigator.geolocation.getCurrentPosition(pos => {
      this.setState({ lat: parseFloat(pos.coords.latitude.toFixed(3)), long: parseFloat(pos.coords.longitude.toFixed(3)), loading: false });

      const searchCityUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${this.state.lat}&lon=${this.state.long}&appid=${Apikeyw}`;

      axios.get(searchCityUrl)
        .then(res => res.data)
        .then(data => {
          this.setState({
            weatherForecast: {
              city: data.city.name.replace('Arrondissement de', ''),
              country: data.city.country,
              sunrise: data.city.sunrise,
              sunset: data.city.sunset,
              temperature: Math.round(data.list[0].main.temp - 273.15),
              feelslike: Math.round(data.list[0].main.feels_like - 273.15),
              tempmin: Math.round(data.list[0].main.temp_min - 273.15),
              tempmax: Math.round(data.list[0].main.temp_max - 273.15),
              pressure: data.list[0].main.pressure,
              humidity: data.list[0].main.humidity,
              wind: data.list[0].wind.speed,
              icon: data.list[0].weather[0].icon,
              weatherData: data.list,
              main: data.list[0].weather[0].main,
              lat: data.city.coord.lat,
              lon: data.city.coord.lon
            },
            loading: false,
            errorMessage: false,
            test: console.log(this.state.lat)
          },
          () => this.setState({ text: data.city.name.replace('Arrondissement de', '') },
            () => {
              if (!favorites.some(alreadyFavorite => alreadyFavorite.toLowerCase() === this.state.text.toLowerCase())) {
                this.setState({ liked: null });
              } else {
                this.setState({ liked: 'yes' });
              }
            }));
        })
        .catch(error => { /* eslint-disable-line */
          console.log('Please search again...');
          this.setState({ errorMessage: true });
        });

      axios.get(`https://api.waqi.info/feed/geo:${this.state.lat};${this.state.long}/?token=${keyAQI}`)
        .then(res => res.data)
        .then(data => {
          this.setState({
            AQI: data.data.aqi,
            pollutionIndex: {
              NO2: data.data.iaqi.no2.v,
              O3: data.data.iaqi.o3.v,
              PM10: data.data.iaqi.pm10.v
            }
          });
        })

        .catch(error => {   /* eslint-disable-line */
          console.log('Please search again...');
          this.setState({ errorMessage: true });
        });
    });

    axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${keyDarkSky}/${this.state.lat},${this.state.long}`)
      .then(res => res.data)
      .then(data => {
        data.alerts &&
      this.setState({
        alerts: {
          title: data.alerts[0].title,
          description: data.alerts[0].description,
          regions: data.alerts[0].regions,
          severity: data.alerts[0].severity,
          url: data.alerts[0].uri
        }
      });
      });
  }

  unixTimestamp (t) {
    const dt = new Date(t * 1000);
    const hr = dt.getHours();
    const m = '0' + dt.getMinutes();
    return hr + ':' + m.substr(-2);
  }

  addToFavorite = (favorite) => {
    const { favorites } = this.state;
    if (!favorites.some(alreadyFavorite => alreadyFavorite === favorite)) {
      this.setState({
        favorites: [...this.state.favorites, favorite],
        liked: 'yes'
      });
    } else {
      this.setState({ favorites: [...this.state.favorites.filter(alreadyFavorite => alreadyFavorite !== favorite)], liked: null });
    }
  };

  deleteFavorite = (favoriteCity) => {
    const { favorites } = this.state;
    this.setState({ favorites: [...favorites.filter(city => city !== favoriteCity.favorite)] },
      () => {
        if (favoriteCity.favorite === this.state.text) {
          this.setState({ liked: null });
        } else {
          this.setState({ liked: 'yes' });
        }
      }
    );
  }

  componentDidMount () {
    localStorage.getItem('favorites') /* eslint-disable-line */
      ? this.setState({ favorites: JSON.parse(localStorage.getItem('favorites')) }) /* eslint-disable-line */
      : localStorage.setItem('favorites', JSON.stringify(this.state.favorites)); /* eslint-disable-line */
  }

  componentDidUpdate (prevState) {
    localStorage.setItem('favorites', JSON.stringify(this.state.favorites)); /* eslint-disable-line */
  }

  handleFocus = (event) => {
    event.target.select();
  }

  render () {
    const { loading, favorites, weatherForecast, liked, temp, AQI, pollutionIndex, errorMessage, alerts } = this.state;

    return (
      <div className='main-search'>
        <form className='search-bar' onSubmit={this.preventSubmit}> { /* eslint-disable-line */}
          <label className='search-label' htmlFor='search-input'>
            <input
              type='text' placeholder='Search for....'
              onKeyDown={this.handleChange}
              value={this.state.text}
              onChange={this.handleTextChanged}
              onFocus={this.handleFocus}
            />
            {this.renderSuggestions()}
          </label>
          <button className='geoLocation-input' onClick={this.handleClick}><i className='fas fa-map-marker-alt' /></button>
        </form>

        {errorMessage &&
          <div className='error-message'>
            <p>Sorry, the specified city was not found. <br />
            Please try searching with a valid city name!
            </p>
          </div>}

        {loading && <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '50px' }}><CircularProgress style={{ width: '100px', height: '100px' }} /></div>}

        {favorites &&
          <ul className='list-favorites'>{favorites.map((favorite, index) => <li style={{ cursor: 'pointer' }} key={index}><span onClick={() => this.fetchOnClick(favorite)} className='city-favorite'>{favorite}</span> <span onClick={() => this.deleteFavorite({ favorite })}><i className='fas fa-times deleting-city' /></span></li>)}</ul>}

        {weatherForecast &&
          <div className='display-weather'>
            <FavoriteItem addFavorite={this.addToFavorite} city={weatherForecast.city} liked={liked} />
            {weatherForecast &&
              <Header className='title'>
                <Header.Content style={{ display: 'flex', flexDirection: 'column' }}>
                  <h5>{moment().format('dddd, MMM DD')}</h5>
                  <h2>{weatherForecast.city}, {weatherForecast.country}</h2>
                  <div className='temp'>
                    <div>{temp ? <h2>{Math.round(weatherForecast.temperature * 9 / 5) + 32}°</h2> : <h2>{weatherForecast.temperature}°</h2>}</div>
                    <h3>
                      <span onClick={() => { temp && this.setState({ temp: null }); }} className={temp ? 'celsius' : 'fahrenheit'}>C</span>
                      <span className='separation-bar'> | </span>
                      <span onClick={() => { !temp && this.setState({ temp: 'farenheit' }); }} className={temp ? 'fahrenheit' : 'celsius'}>F</span>
                    </h3>
                  </div>
                  <img src={`https://openweathermap.org/img/wn/${weatherForecast.icon}@2x.png`} alt='icon' />
                </Header.Content>
                <WeatherDetails weatherForecast={weatherForecast} unixTimestamp={this.unixTimestamp} temp={temp} />
              </Header>}

            <Card.Group className='cards'>
              {weatherForecast &&
                weatherForecast.weatherData
                  .filter(data => data.dt_txt.includes('12:00:00'))
                  .map((meteo, index) => {
                    return <Meteo
                      key={index}
                      phrase={meteo.weather[0].description}
                      date={meteo.dt_txt}
                      min={Math.floor(meteo.main.temp_min - 273.15)}
                      max={Math.ceil(meteo.main.temp_max - 273.15)}
                      icon={meteo.weather[0].icon}
                      switch={this.state.temp}
                    />; // eslint-disable-line
                  })}
            </Card.Group>
          </div>}
        {AQI && <Pollution AQI={AQI} NO2={pollutionIndex.NO2} O3={pollutionIndex.O3} PM10={pollutionIndex.PM10} />}
        {weatherForecast && <SuggestionsList min={weatherForecast.tempmin} main={weatherForecast.main} />}

        {alerts &&
          <Alerts
            title={alerts.title}
            description={alerts.description}
            regions={alerts.regions}
            severity={alerts.severity}
            url={alerts.url}
          />}
      </div>
    );
  }
}

export default SearchBar;
