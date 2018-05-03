import React, { Component } from 'react';

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
    console.log(this.state.zipCode);
  }

  render() {
    return (
      <div className="App">
        <h1>Weather</h1>
        <input onChange={this.handleChange} />
        <button onClick={this.handleClick}>Get Weather</button>
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
