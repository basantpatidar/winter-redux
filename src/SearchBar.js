import React from 'react';
import {connect } from 'react-redux';
import * as action from './actions';

class SearchBar extends React.Component{
  handleChange = (event) => {
    this.props.currentWeather( event.target.value );
    console.log(this.props.apiResponse, "THis is handleChange ");
  }
  renderWeather = () => {
    if(this.props.apiResponse){
      console.log(this.props.apiResponse, "API Response")
    }
  }
render(){
  return(
    <div>
    <h3> Enter City name </h3>
    <input type = "text" name = 'search' onChange={this.handleChange}/>
    <p> {
      this.renderWeather()
    } </p>
    </div>
  )
}
}
const mapStateToProps = (state) => {
  return {
    apiResponse: state.apiResponse
  }
}
export default connect(mapStateToProps, action)(SearchBar);