import React, { Component } from "react";

class CountrySingle extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.params.capital}</h1>
        <p>Single page will be here!</p>
      </div>
    );
  }
}

export default CountrySingle;
