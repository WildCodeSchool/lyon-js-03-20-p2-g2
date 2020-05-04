import React, { Component } from 'react';
import '../style/pollution.css';

class Pollution extends Component {
    render() {
        return (
            <div className='div-pollution'>
                <div className='icone-AQI'>Logo</div>
                <div>
                    <h3>{this.props.AQI} AQI</h3>
                </div>
                <div>
                    <span>{this.props.NO2} NO2</span>
                    <span>{this.props.O3} O3</span>
                    <span>{this.props.PM10} PM10</span>
                </div>
            </div>
        );
    }
}

export default Pollution;