import React from 'react';
import { connect } from 'react-redux';
import * as action from './actions';
import SearchResults from './SearchResults';
import axios from 'axios';

class SearchBar extends React.Component {
  handleChangeCity = event => {
    this.props.city(event.target.value);
  //  console.log(this.props.apiResponse, 'This is handleChange City ');
  };
  handleChangeZip = event => {
    this.props.zip(event.target.value);
   // console.log(this.props.apiResponse, 'This is handleChange Zip');
  };
  callApiHere = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.props.searchInput.city}&appid=`
      )
      .then(res => this.props.SearchResult(res.data));
    const res = '';
  };

  render() {
    return (
      <div>
        <h3> Enter City name </h3>
        <input
          type="text"
          name="search"
          onChange={this.handleChangeCity}
        />{' '}
        <br></br>
        <input type="text" name="country" onChange={this.handleChangeZip} />
        <button onClick={this.callApiHere}> Submit </button>
        <SearchResults />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    searchInput: state.searchReducer
  };
};
export default connect(mapStateToProps, action)(SearchBar);
