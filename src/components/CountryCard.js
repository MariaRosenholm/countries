import React from "react";
import numberF from "easy-number-formatter";
import { Link } from "react-router-dom";

const CountryCard = ({
  name,
  capital,
  flag,
  population,
  currencies,
  languages,
}) => {
  return (
    <div className="card">
      <Link className="link" to={capital}>
        <img alt="country flag" src={flag} />
        <h1>{name}</h1>
        <h2>
          Capital: <span>{capital}</span>
        </h2>
        <h2>
          Population: <span>{numberF.formatNumber(population)}</span>
        </h2>
        <h2>
          Language(s):
          {languages.map((l, i) => (
            <span key={i}> {l.name}, </span>
          ))}
        </h2>
        <h2>
          Currency(cies):
          {currencies.map((c) => (
            <span>
              {" "}
              <span id="symbol">{c.symbol}</span> {c.name},
            </span>
          ))}
        </h2>
      </Link>
    </div>
  );
};

export default CountryCard;
