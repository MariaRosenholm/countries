import axios from "axios";
import { Component } from "react";
import CountryCard from "./CountryCard";

class CountryList extends Component {
  state = {
    data: [],
    search: "",
    loading: true,
  };

  componentDidMount() {
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,capital,currencies,flag,population,currency,languages"
      )
      .then((res) => {
        this.setState({ data: res.data, loading: false });
      });
  }

  searchHandler = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const countryFilter = this.state.data.filter((country) => {
      return country.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });

    if (this.state.loading) {
      return <div className="loader"></div>;
    }

    if (!this.state.loading) {
      return (
        <div>
          <input
            type="text"
            name="search"
            placeholder="search by country name"
            onChange={this.searchHandler}
          />
          <div id="countriesWrapper">
            {countryFilter.map((c) => (
              <CountryCard {...c} id={c.name} />
            ))}
          </div>
          <div id="footerWrapper">
            <p>Copyrights</p>
            <p>App made by Maria Rosenholm 2021</p>
            <div id="footerPic"></div>
          </div>
        </div>
      );
    }
  }
}

export default CountryList;
