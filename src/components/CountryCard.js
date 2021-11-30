import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ name, flag, capital }) => {
  return (
    <div className="card">
      <Link className="link" to={capital}>
        <img alt="country flag" src={flag} />
        <h2 id="countryName">{name.substring(0, 45)}</h2>
      </Link>
    </div>
  );
};

export default CountryCard;
