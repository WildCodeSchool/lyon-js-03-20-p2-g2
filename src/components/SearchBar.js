import React, { Component } from 'react';
import '../style/search-bar.css';



class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      results: {},
      loading: false,
      message: '',
    };
  }

  //***handleOnInputChange arrow FUNCTION expression *****/

  handleOnInputChange = (event) => {
    const query = event.target.value;//get the input value
    this.setState({ query, loading: true, message: '' });//replace by the current state
    console.log(query)
  };


  render() {
    return (
      <form className="search-bar">
        <label className="search-label" htmlFor="search-input">

          <input
            type="text"
            value=""
            id="search-input"
            placeholder="Search City..."
            onChange={this.handleOnInputChange}
          />

        </label>
      </form>
    )
  }
}

export default SearchBar;
