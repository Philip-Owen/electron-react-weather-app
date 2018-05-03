import React from 'react';
import PropTypes from 'prop-types';

const Weather = props => {
  const iconUrl = `http://openweathermap.org/img/w/${props.icon}.png`;
  return (
    <div>
      <p>{props.name}</p>
      <img src={iconUrl} alt="" />
      <p>Temp: {props.temp.toFixed(1)}</p>
      <p>Wind Speed: {props.windSpeed.toFixed(1)} MPH</p>
      <p>Wind Direction: {props.windDirection.toFixed(1)}</p>
    </div>
  );
};


Weather.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
  windDirection: PropTypes.number.isRequired,
};

export default Weather;
