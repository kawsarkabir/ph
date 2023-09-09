import React from "react";

const Country = ({ country }) => {
  const { name, flags } = country;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img className="w-80 h-44 rounded-lg" src={flags.png} alt="Shoes" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name?.common}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
