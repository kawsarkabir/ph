import React, { useState } from "react";
import Modal from "../Modal/Modal";

const Country = ({ country, modalData, setModalData }) => {
  const handleClick = (data) => {
    window.document.getElementById("my_modal").showModal();
    setModalData(data);
  };
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="w-80 h-52" src={country.flags.png} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h1 className="card-title">{country.name.common}</h1>
          <h4 className="text-lg font-semibold">{country.name.official}</h4>
          <p>Population: {country.population}</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => handleClick(country)}
            >
              Details
            </button>

            <Modal country={country} modalData={modalData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
