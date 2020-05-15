import React from 'react';
import '../style/pollution.css';

let icone = '';
let classIndex = '';
let classAQIIndice = '';

function GoodAQI() {
  return (
    <div className='div-AQI div-good-AQI'>
      <div>
        <i className='far fa-laugh-beam' />
        <p className={`par-good-AQI ${classAQIIndice}`}>Good</p>
      </div>
    </div>
  );
}

function ModerateAQI() {
  return (
    <div className='div-AQI div-moderate-AQI'>
      <div>
        <i className='far fa-meh' />
        <p className={`par-moderate-AQI ${classAQIIndice}`}>Moderate</p>
      </div>
    </div>
  );
}

function UnhealthyAQI() {
  return (
    <div className='div-AQI div-unhealthy-AQI'>
      <div>
        <i className='far fa-frown-open' />
        <p className={`par-unhealthy-AQI ${classAQIIndice}`}>Unhealthy</p>
      </div>
    </div>
  );
}

const Pollution = (props) => {
  const AQI = props.AQI;

  if (AQI < 60) {
    icone = <GoodAQI />;
    classIndex = 'green-border';
    classAQIIndice = 'green';
  } else if (AQI >= 50 && AQI <= 120) {
    icone = <ModerateAQI />;
    classIndex = 'yellow-border';
    classAQIIndice = 'yellow';
  } else if (AQI > 120) {
    icone = <UnhealthyAQI />;
    classIndex = 'red-border';
    classAQIIndice = 'red';
  }

  return (
    <div className='div-pollution'>
      <div className='div-title'>
        <h3 className='title-pollution'>Air pollution</h3>
      </div>
      {icone}
      <div className='AQI-indice'>
        <h3 className={classAQIIndice} title="Air quality index">{props.AQI} AQI</h3>
      </div>
      <hr />
      <div className='div-pollution-index'>
        <div className='NO2'>
          <p><span className='bold-indice' title="Dioxyde d'azote">NO2</span> (µg/m3)</p>
          <span className={`pollution-index ${classIndex}`}>{props.NO2}</span>
        </div>
        <div className='O3'>
          <p><span className='bold-indice' title="Ozone">O3</span> (µg/m3)</p>
          <span className={`pollution-index ${classIndex}`}>{props.O3}</span>
        </div>
        <div className='PM10'>
          <p><span className='bold-indice' title="Particulates">PM10</span> (µg/m3)</p>
          <span className={`pollution-index ${classIndex}`}>{props.PM10}</span>
        </div>
      </div>
    </div>
  );
};

export default Pollution;
