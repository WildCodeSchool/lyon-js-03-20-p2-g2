import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import '../../style/cardsWeatherWears.css';

class Cloudy extends Component {
  render () {
    return (
      <div className='cloudy'>
        <div className='weatherCard'>

          <h1 className='ourSuggest'>Our suggestions</h1>
          <img className='humanoid' src='data:image/jpeg;base64,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8gPAADwml01jtLvTNPJz9V8LguIiJWO6IiIAiIgCIiAIiIAiIgCIiAIMT4w2MA5B2eoI0yZ83B94scGVfaNgitd7QekEoVODnYcu+xVjgEHr7wJ0teACpSq/VLu/uNjs5HzYzTu03CSz0U4P0t65/s6s3P8AD2Av96WPUTWDhy0clZ3fqSl3AiWh0G8x2aM+U29RFZ6aSIAMja+w4A+MszpCPCVWsqYsdtunyme80dMkRJH1HeO9NNbBXvtSoNjmKhsl2C9CVUMd9tpL7gy3/Jxwk33niDD6GsNXpv12O11w9MDkU+I5/AiaynhE+l0rssWVsuTdOzfZ2nRV8lQJZt7LW3e1vN28fQdANhLeIlY9AkksIREQZEREAREQBERAEREAREQBERAEREA+ESts4Srahb2/R1MiD1sZTYflXWB7zLOIBFbRqfCYn4cp8JPiDXtRVWcKzIydnhvk+73y+iDHpx+DV9V2SFo5HflqP1wuQzr90P8AYB6EjfGQMZyNk09C1otaKFRQFVVAAVQMAADoAPCZIgzGKjwIiINhERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREA//2Q==' alt='texteAlte' />
          <h2 className='textClothes'>The weather will be cloudy and overcast, so don't forget to cover yourself, a jacket, a hat and a scarf will be useful</h2>
          <h4 className='dontForget'> Do not forget to wear ...</h4>
          <div className='clothes'>
            <Image src='http://ekladata.com/_Fg59OYc6MT0vv03vol9kTsqzpE@214x214.jpg' />
            <Image src='http://ekladata.com/iJn60fMlLozKiEcOUdg3NmXDf4Q@191x191.jpg' />
            <Image src='http://ekladata.com/bNcVLzV0965u0CkVBnymSY15oKw@211x211.jpg' />
            <Image src='https://media.istockphoto.com/vectors/mitten-winter-glove-line-icon-outline-vector-sign-linear-pictogram-vector-id689121152' />
          </div>
        </div>

      </div>
    );
  }
}

export default Cloudy;
