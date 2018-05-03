import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    zipCode: '',
    apiData: [],
  }

  handleChange = event => {
    this.setState({
      zipCode: event.target.value,
    });
  }

  handleClick = () => {
    let apiUrl = 'http://api.openweathermap.org/data/2.5/';
    apiUrl += `weather?zip=${this.state.zipCode},us&units=imperial`;
    apiUrl += `&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`;

    axios.get(apiUrl)
      .then(response => {
        this.setState({
          apiData: response.data,
        });
      })
      .catch(error => {
        console.log('Error getting weather data', error);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Weather</h1>
        <input onChange={this.handleChange} />
        <button onClick={this.handleClick}>Get Weather</button>
        <div>
          <p>City{this.state.apiData.name}</p>
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
