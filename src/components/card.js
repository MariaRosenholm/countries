import React from "react";
import numberF from "easy-number-formatter";

const Card = ({ name, capital, flag, population, currencies, languages }) => {
  return (
    <div className="card">
      <img alt="country flag" src={flag} />
      <h1>{name}</h1>
      <h2>Capital: {capital}</h2>
      <h2>Population: {numberF.formatNumber(population)}</h2>
      <p>
        Language(s):
        {languages.map((l, i) => (
          <span key={i}> {l.name}- </span>
        ))}
      </p>
      <p>
        Currency(cies):
        {currencies.map((c) => (
          <span>
            {c.symbol} {c.name}-
          </span>
        ))}
      </p>
    </div>
  );
};

export default Card;
