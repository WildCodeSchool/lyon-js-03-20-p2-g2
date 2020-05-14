import React, { Component } from 'react';
import SuggestionsCard from './SuggestionsCard';

const Rainy = {
  img: require('../images/suggestions/rainy1.gif'),
  p: 'The weather will be cloudy and overcast, so don\'t forget to cover yourself, a jacket, some boots will be useful and don\'t forget your umbrella',
  img1: require('../images/suggestions/rain-boots.png'),
  img2: require('../images/suggestions/umbrella.png'),
  img3: require('../images/suggestions/rain-coat.png'),
  img4: require('../images/suggestions/bonnet.png'),
  alt: 'rainy-weather'
};
const Cold = {
  img: require('../images/suggestions/cold1.gif'),
  p: 'The weather will be cloudy and overcast, so don\'t forget to cover yourself, a jacket, a hat and a scarf will be useful',
  img1: require('../images/suggestions/bonnet.png'),
  img2: require('../images/suggestions/coat.png'),
  img3: require('../images/suggestions/gloves.png'),
  img4: require('../images/suggestions/scarf.png'),
  alt: 'cold-weather'
};
const Snowy = {
  img: require('../images/suggestions/snowy1.gif'),
  p: 'The weather will be snowy and cold, so don\'t forget to cover yourself with a jacket, a hat and a scarf.Let it snow!',
  img1: require('../images/suggestions/snow-boots.png'),
  img2: require('../images/suggestions/gloves.png'),
  img3: require('../images/suggestions/bonnet.png'),
  img4: require('../images/suggestions/coat.png'),
  alt: 'snowy-weather'
};
const Temperate = {
  img: require('../images/suggestions/temperate1.gif'),
  p: 'The temperature is moderate today, it is the good moment to go outside if you want to take a walk or practice some sports !\n' +
    '  Feel free to wear comfortable clothes !',
  img1: require('../images/suggestions/tee-shirt.png'),
  img2: require('../images/suggestions/jean.png'),
  img3: require('../images/suggestions/sportshoes.png'),
  img4: require('../images/suggestions/casquette.png'),
  alt: 'temperate-weather'
};
const VeryHot = {
  img: require('../images/suggestions/hot1.gif'),
  p: 'It is very hot today, you should go out only if you need to.\n' +
    '          You must drink a lot of water, cover your head and find cool places if you go outside.',
  img1: require('../images/suggestions/bottle.png'),
  img2: require('../images/suggestions/ventilator.png'),
  img3: require('../images/suggestions/sunglasses.png'),
  img4: require('../images/suggestions/sunscreen.png'),
  alt: 'very-hot-weather'
};

let clothes = '';

class SuggestionsList extends Component {
  render () {
    const temperature = this.props.min;
    const description = this.props.main;

    if (description.includes('Rain')) {
      clothes = <SuggestionsCard {...Rainy} />;
    } else if (description.includes('Snow')) {
      clothes = <SuggestionsCard {...Snowy} />;
    } else if (temperature <= 10) {
      clothes = <SuggestionsCard {...Cold} />;
    } else if ((temperature >= 10 && temperature <= 18)) {
      clothes = <SuggestionsCard {...Temperate} />;
    } else if ((temperature > 18 && temperature <= 30 && description.includes('Clouds'))) {
      clothes = <SuggestionsCard {...Temperate} />;
    } else if (temperature > 18 && temperature <= 30) {
      clothes = <SuggestionsCard {...Temperate} />;
    } else if (temperature >= 31) {
      clothes = <SuggestionsCard {...VeryHot} />;
    } else clothes = <h2 align='center'>no data</h2>;

    return (
      <div>{clothes}</div>
    );
  }
}

export default SuggestionsList;
