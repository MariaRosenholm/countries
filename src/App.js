import axios from "axios";
import { Component } from "react";
import Card from "./components/card";

class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      this.setState({ data: res.data });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        {this.state.data.map((c) => (
          <Card
            name={c.name.common}
            capital={c.capital}
            flag={c.flags.png}
            population={c.population}
          />
        ))}
      </div>
    );
  }
}

export default App;
