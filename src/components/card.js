import React from "react";

const Card = ({ name, capital, flag, population }) => {
  return (
    <div className="card">
      <img src={flag} />
      <h1>{name}</h1>
      <h2>{capital}</h2>
      <p>Population: {population}</p>
    </div>
  );
};

export default Card;
