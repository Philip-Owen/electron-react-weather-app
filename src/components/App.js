import React, { Component } from 'react';

class App extends Component {
  state = {
    zipCode: '',
    apiData: [],
  }

  render() {
    return (
      <div className="App">
        <h1>Weather</h1>
        <input />
        <button>Get Weather</button>
        <div>
          <p>City</p>
          <img src="" alt="" />
          <p>Temp</p>
          <p>High</p>
          <p>Low</p>
          <p>Wind Speed</p>
          <p>Wind Direction</p>
        </div>
      </div>
    );
  }
}

export default App;
