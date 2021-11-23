import axios from "axios";
import { Component } from "react";
import Card from "./components/card";

class App extends Component {
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
        .toLocaleLowerCase()
        .includes(this.state.search.toLocaleLowerCase());
    });

    if (this.state.loading) {
      return <div className="loader"></div>;
    }

    if (!this.state.loading) {
      return (
        <div className="App">
          <header className="App-header"></header>
          <h1>Country search</h1>
          <input
            type="text"
            name="search"
            placeholder="search by country name"
            onChange={this.searchHandler}
          />
          <div id="countriesWrapper">
            {countryFilter.map((c) => (
              <Card
                name={c.name}
                capital={c.capital}
                flag={c.flag}
                population={c.population}
                currencies={c.currencies}
                languages={c.languages}
              />
            ))}
          </div>
        </div>
      );
    }
  }
}

export default App;
