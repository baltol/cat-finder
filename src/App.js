import React, { Component } from 'react';
import ChaJS from "./ChaJS";
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">The Fastest Cat Finder on the Web!</h1>
        <ChaJS></ChaJS>
      </div>
    );
  }
}

export default App;
