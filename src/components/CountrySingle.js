import React, { Component } from "react";
import axios from "axios";
import numberF from "easy-number-formatter";

const getCountry = (capital) => {
  return axios.get(`https://restcountries.com/v2/capital/${capital}`);
};

const getWeather = (capital) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${process.env.REACT_APP_WEATHERAPI_KEY}`
  );
};

class CountrySingle extends Component {
  state = {
    country: [],
    weather: [],
    loading: true,
  };

  componentDidMount() {
    Promise.all([
      getCountry(this.props.params.capital),
      getWeather(this.props.params.capital),
    ]).then((res) => {
      this.setState({
        country: res[0].data[0],
        weather: res[1].data,
        loading: false,
      });
    });
  }

  render() {
    if (this.state.loading) {
      return <div className="loader"></div>;
    }

    if (!this.state.loading) {
      return (
        <div>
          <div id="imageLayer"></div>
          <div id="single">
            <h2>{this.state.country.name}</h2>
            <p>
              {this.state.country.name} is part of {this.state.country.region}{" "}
              and situated in the {this.state.country.subregion}.
            </p>
            <p>
              Weather in {this.state.country.capital} at the moment is{" "}
              {this.state.weather.main.temp}˚C
            </p>
            <img
              alt={this.state.weather.weather[0].description}
              src={`http://openweathermap.org/img/wn/${this.state.weather.weather[0].icon}@2x.png`}
            />
            <div id="singleWrapper">
              <div id="list1">
                <h3>
                  Capital: <span>{this.state.country.capital}</span>
                </h3>
                <h3>
                  Population:{" "}
                  <span>
                    {numberF.formatNumber(this.state.country.population)}
                  </span>
                </h3>
                <h3>
                  Language(s):
                  {this.state.country.languages.map((l, i) => (
                    <span key={i}> {l.name}, </span>
                  ))}
                </h3>
              </div>
              <div id="list2">
                <h3>
                  Currency(cies):
                  {this.state.country.currencies.map((c) => (
                    <span>
                      {" "}
                      <span id="symbol">{c.symbol}</span> {c.name},
                    </span>
                  ))}
                </h3>
                <h3>
                  Country code(s) for calling:
                  {this.state.country.callingCodes.map((c) => (
                    <span> +{c},</span>
                  ))}
                </h3>
                <h3>
                  Timo zone(s):
                  {this.state.country.timezones.map((c) => (
                    <span> {c},</span>
                  ))}
                </h3>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default CountrySingle;
