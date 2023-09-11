import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCounties, setVisitedCountries] = useState([]);

  useEffect(() => {
    const LoadCountries = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountries(data);
    };
    LoadCountries();
  }, []);

  const handleViditedCountries =country=>{
    const newVisitedCountries = [...visitedCounties, country]
    setVisitedCountries(newVisitedCountries)
  }

  return (
    <div>
      <h1>How Much Country in the World: {countries.length}</h1>
      <h2>How Much Visited Country in the World: {visitedCounties.length}</h2>
      <ol> My Visited Country List:
        {
          visitedCounties.map(country=> <li key={country.cca3}>{country.name.common}</li>)
        }
      </ol>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {countries.map((country) => (
          <Country country={country} handleViditedCountries={handleViditedCountries} key={country.cca3} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
