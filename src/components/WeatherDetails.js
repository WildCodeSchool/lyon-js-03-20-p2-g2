import React from 'react';
import '../style/weatherdetails.css';

const WeatherDetails = ({ weatherForecast, temp, unixTimestamp }) => {
  return (
    <table className='moreInfo'>
      <tbody>
        <tr>
          <td title='"Feels like" temperature'>
            {temp ? <h3 className='details-figures'>{Math.round(weatherForecast.feelslike * 9 / 5) + 32}°F</h3> : <h3 className='details-figures'>{weatherForecast.feelslike}°C</h3>}
            <img className='img-icon' src={require('../images/feeling-temperature.png')} alt='feeling-temperature-icon' />
          </td>

          <td title='Wind speed'>
            <h3 className='details-figures'>{weatherForecast.wind} m/s</h3>
            <img className='img-icon' src={require('../images/wind.svg')} alt='wind-icon' />
          </td>

          <td title='Minimal temperature'>
            {temp ? <h3 className='details-figures'>{Math.round(weatherForecast.tempmin * 9 / 5) + 32}°F</h3> : <h3 className='details-figures'>{weatherForecast.tempmin}°C</h3>}
            <img className='img-icon' src={require('../images/min-temperature.png')} alt='minimal-temperature-icon' />
          </td>

          <td title='Maximal temperature'>
            {temp ? <h3 className='details-figures'>{Math.round(weatherForecast.tempmax * 9 / 5) + 32}°F</h3> : <h3 className='details-figures'>{weatherForecast.tempmax}°C</h3>}
            <img className='img-icon' src={require('../images/max-temperature.png')} alt='maximal-temperature-icon' />
          </td>
        </tr>

        <tr title='Atmospheric pressure'>
          <td>
            <h3 className='details-figures'>{weatherForecast.pressure} hpa</h3>
            <img className='img-icon' src={require('../images/atmospheric-pressure.png')} alt='atmospheric-pressure-icon' />
          </td>

          <td title='Humidity percentage'>
            <h3 className='details-figures'>{weatherForecast.humidity} %</h3>
            <img className='img-icon' src={require('../images/humidity.png')} alt='humidity-icon' />
          </td>

          <td title='Sunrise'>
            <h3 className='details-figures'>{unixTimestamp(weatherForecast.sunrise)}</h3>
            <img className='img-icon sunrise' src={require('../images/sunrise.png')} alt='sunrise-icon' />
          </td>

          <td title='Sunset'>
            <h3 className='details-figures'>{unixTimestamp(weatherForecast.sunset)}</h3>
            <img className='img-icon' src={require('../images/sunset.png')} alt='sunset-icon' />
          </td>
        </tr>

      </tbody>
    </table>
  );
};

export default WeatherDetails;
