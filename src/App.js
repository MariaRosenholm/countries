import "./App.css";
import axios from "axios";
import { Component } from "react";

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
      </div>
    );
  }
}

export default App;
