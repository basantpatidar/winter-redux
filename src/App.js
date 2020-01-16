import React, { Component } from 'react';
import './App.css';
import SearchBar from "./SearchBar"

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar className = "searchBar"/>
      </div>
    );
  }
}

export default App;
