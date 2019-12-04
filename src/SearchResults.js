import React from 'react';
import { connect } from 'react-redux';
const SearchResult = props => {
  //It the view
  //everything after search result should be dispalyed here
  const renderThis = () => {
    const { apiResponse } = props.searchReducer;
    return (
      <div>
        <p> {apiResponse && apiResponse.main && apiResponse.main.temp} </p>
        <p>
          {' '}
          {apiResponse &&
            apiResponse.weather &&
            apiResponse.weather[0].main}{' '}
        </p>
        <p> {apiResponse && apiResponse.sys && apiResponse.sys.country} </p>
      </div>
    );
  };

  return (
    <div>
      <p>This is Search Results file</p>
      {renderThis()}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    searchReducer: state.searchReducer
  };
};
export default connect(mapStateToProps)(SearchResult);
