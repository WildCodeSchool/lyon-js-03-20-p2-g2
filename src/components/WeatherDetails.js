import React from 'react';
import '../style/weatherdetails.css';

const WeatherDetails = ({ weatherForecast, temp, unixTimestamp }) => {
  return (
    <table className='moreInfo'>
      <tbody>
        <tr>
          <td>
            {temp ? <h3 className='details-figures'>{Math.round(weatherForecast.feelslike * 9 / 5) + 32}°F</h3> : <h3 className='details-figures'>{weatherForecast.feelslike}°C</h3>}
            <h4 className='details-titles'>Feeling</h4>
          </td>

          <td>
            <h3 className='details-figures'>{weatherForecast.wind} m/s</h3>
            <h4 className='details-titles'>Wind</h4>
          </td>

          <td>
            {temp ? <h3 className='details-figures'>{Math.round(weatherForecast.tempmin * 9 / 5) + 32}°F</h3> : <h3 className='details-figures'>{weatherForecast.tempmin}°C</h3>}
            <h4 className='details-titles'>Min Temp</h4>
          </td>

          <td>
            {temp ? <h3 className='details-figures'>{Math.round(weatherForecast.tempmax * 9 / 5) + 32}°F</h3> : <h3 className='details-figures'>{weatherForecast.tempmax}°C</h3>}
            <h4 className='details-titles'>Max Temp</h4>
          </td>
        </tr>

        <tr>
          <td>
            <h3 className='details-figures'>{weatherForecast.pressure} hpa</h3>
            <h4 className='details-titles'>Pressure</h4>
          </td>

          <td>
            <h3 className='details-figures'>{weatherForecast.humidity} %</h3>
            <h4 className='details-titles'>Humidity</h4>
          </td>

          <td>
            <h3 className='details-figures'>{unixTimestamp(weatherForecast.sunrise)}</h3>
            <h4 className='details-titles'>Sunrise</h4>
          </td>

          <td>
            <h3 className='details-figures'>{unixTimestamp(weatherForecast.sunset)}</h3>
            <h4 className='details-titles'>Sunset</h4>
          </td>
        </tr>

      </tbody>
    </table>
  );
};

export default WeatherDetails;
