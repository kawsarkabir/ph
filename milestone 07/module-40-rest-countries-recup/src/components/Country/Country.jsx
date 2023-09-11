import React, { useState } from "react";

const Country = ({ country, handleViditedCountries }) => {
  const { name, flags, population, area, correncies } = country;
  const [visited, setVisited] = useState(false);
  const handleClick = () => {
    setVisited(!visited);
  };

  const passWithParams =()=> handleViditedCountries(country)

  return (
    <div>
      <div className={`card w-96 bg-base-100 ${visited && 'bg-purple-400'} shadow-xl`}>
        <figure className="px-10 pt-10">
          {
            <img
              className="w-80 h-44 rounded-lg"
              src={flags?.png}
              alt="Shoes"
            />
          }
        </figure>
        <div className="card-body items-center text-center">
          {<h2 className="card-title">{name?.common}</h2>}
          {<p>Population: {population}</p>}
          <p>Area: {area}</p>
          {<p>Id: {country.ccn3}</p>}
          <div className="card-actions">
            <button onClick={handleClick} className="btn btn-primary">
              {visited ? 'visited': 'Going'}
            </button>
            {visited
              ? "i have visited this country"
              : "i want vidit this country"}
            <button onClick={passWithParams} className="btn btn-primary">MarkVisited</button>
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
