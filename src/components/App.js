import React, { Component } from 'react';
import axios from 'axios';

import Weather from './Weather';

class App extends Component {
  state = {
    zipCode: '',
    apiData: {},
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
        <div>
          <h1>Weather</h1>
          <input onChange={this.handleChange} />
          <button onClick={this.handleClick}>Get Weather</button>
        </div>
        {
          this.state.apiData.main ?
            <Weather
              name={this.state.apiData.name}
              icon={this.state.apiData.weather[0].icon}
              temp={this.state.apiData.main.temp}
              windSpeed={this.state.apiData.wind.speed}
              windDirection={this.state.apiData.wind.deg}
            /> :
            <div />
        }
      </div>
    );
  }
}

export default App;
