import React, { Component } from "react";
import axios from "axios";

const getCountry = (capital) => {
  return axios.get(`https://restcountries.com/v3.1/capital/${capital}`);
};

const getWeather = (capital) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${process.env.REACT_APP_WEATHERAPI_KEY}`
  );
};

class CountrySingle extends Component {
  state = {
    country: [],
    weather: [],
  };

  componentDidMount() {
    Promise.all([
      getCountry(this.props.params.capital),
      getWeather(this.props.params.capital),
    ]).then((res) => {
      this.setState({ country: res[0].data, weather: res[1].data });
    });
  }

  render() {
    return (
      <div id="single">
        <h1>{this.props.params.capital}</h1>
        <p>{/*this.state.weather*/}</p>
      </div>
    );
  }
}

export default CountrySingle;
