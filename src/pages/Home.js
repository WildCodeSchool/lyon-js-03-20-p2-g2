import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import '../style/home.css';

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <SearchBar />
            </div>
        );
    }
}

export default Home;