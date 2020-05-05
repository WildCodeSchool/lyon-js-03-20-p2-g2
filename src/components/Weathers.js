import React, { Component } from 'react';
import Weather from './Weather';

const Rainy = {
  img: require('../images/gif/tenor.gif'),
  p: 'The weather will be cloudy and overcast, so don\'t forget to cover yourself, a jacket, some boots will be useful and don\'t forget your umbrella',
  img1: require('../images/rain-boots.png'),
  img2: require('../images/umbrella.png'),
  img3: require('../images/rain-coat.png'),
  img4: ''
};
const Cold = {
  img: require('../images/gif/link-cold.gif'),
  p: 'The weather will be cloudy and overcast, so don\'t forget to cover yourself, a jacket, a hat and a scarf will be useful',
  img1: require('../images/bonnet.png'),
  img2: require('../images/coat.png'),
  img3: require('../images/scarf.png'),
  img4: require('../images/gloves.png')
};
const Sunny = {
  img: require('../images/image-sunny.png'),
  p: 'The weather will be sunny so don\'t cover yourself too much but protect you skin and don\'t forget your glasses',
  img1: require('../images/tee-shirt.png'),
  img2: require('../images/casquette.png'),
  img3: require('../images/sunscreen.png'),
  img4: require('../images/sunglasses.png')
};
const Snowy = {
  img: require('../images/image-snowy.png'),
  p: 'The weather will be snowy and cold, so don\'t forget to cover yourself with a jacket, a hat and a scarf.Let it snow!',
  img1: require('../images/snow-boots.png'),
  img2: require('../images/gloves.png'),
  img3: require('../images/bonnet.png'),
  img4: require('../images/coat.png')
};
const Temperate = {
  img: require('../images/image-cold.png'),
  p: 'The temperature is moderate today, it is the good moment to go outside if you want to take a walk or practice some sports !\n' +
    '  Feel free to wear comfortable clothes !',
  img1: require('../images/tshirt.png'),
  img2: require('../images/jean.png'),
  img3: require('../images/sportshoes.png'),
  img4: require('../images/dress.png')
};
const VeryHot = {
  img: require('../images/image-cold.png'),
  p: 'It is very hot today, you should go out only if you need to.\n' +
    '          You must drink a lot of water, cover your head and find cool places if you go outside.',
  img1: require('../images/bottle.png'),
  img2: require('../images/ventilator.png'),
  img3: require('../images/swimsuit.png'),
  img4: require('../images/sunscreen.png')
};

let clothes = '';

class Weathers extends Component {
  render () {
    const temperature = this.props.min;
    const description = this.props.main;

    if (temperature < 3 && description.includes('Snow')) {
      clothes = <Weather {...Snowy} />;
    } else if (description.includes('Snow')) {
      clothes = <Weather {...Snowy} />;
    } else if ((temperature >= 3 && temperature <= 7) && description.includes('Clouds')) {
      clothes = <Weather {...Cold} />;
    } else if (temperature < 3 && description.includes('Sunny')) {
      clothes = <Weather {...Cold} />;
    } else if (temperature < 3 && description.includes('Clouds')) {
      clothes = <Weather {...Cold} />;
    } else if ((temperature > 18 && temperature <= 30) && description.includes('Sunny')) {
      clothes = <Weather {...Sunny} />;
    } else if ((temperature > 18 && temperature <= 30) && description.includes('Clouds')) {
      clothes = <Weather {...Sunny} />;
    } else if ((temperature >= 8 && temperature <= 18) && description.includes('Clear')) {
      clothes = <Weather {...Temperate} />;
    } else if ((temperature >= 8 && temperature <= 18) && description.includes('Clouds')) {
      clothes = <Weather {...Temperate} />;
    } else if ((temperature >= 8 && temperature <= 18) && description.includes('Sunny')) {
      clothes = <Weather {...Temperate} />;
    } else if (temperature > 18 && temperature <= 30) {
      clothes = <Weather {...Sunny} />;
    } else if (temperature >= 31) {
      clothes = <Weather {...VeryHot} />;
    } else if (description.includes('Rain')) {
      clothes = <Weather {...Rainy} />;
    } else clothes = <h2 align='center'>no data</h2>;

    return (
      <div>{clothes}</div>
    );
  }
}

export default Weathers;
