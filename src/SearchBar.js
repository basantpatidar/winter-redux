import React from 'react';
import {connect } from 'react-redux';
import * as action from './actions';

class SearchBar extends React.Component{
  handleChange = (event) => {
    this.props.currentWeather( event.target.value );
  }
render(){
  return(
    <div>
    <h3> Enter City name </h3>
    <input type = "text" name = 'search' onChange={this.handleChange}/> 
    </div>
  )
}
}
const mapStateToProps = (state) => {
  return {
    search: state.search
  }
}
export default connect(mapStateToProps, action)(SearchBar);