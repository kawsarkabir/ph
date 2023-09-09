import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([])

    useEffect(()=>{
        const allCountries = async ()=>{
            const res = await fetch('https://restcountries.com/v3.1/all');
            const data = await res.json()
            setCountries(data);
        }
        allCountries()
    },[])
    return (
        <div>
            <h1 className='my-10 text-center'>How Much Country in the World: {countries.length}</h1>
             <div  className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-10'>
             {
            countries.map(country=> <Country country={country} key={country.cca3} />)
        }
             </div>
        </div>
       
    );
};

export default Countries;