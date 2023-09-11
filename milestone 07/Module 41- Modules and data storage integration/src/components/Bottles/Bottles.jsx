import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';

const Bottles = () => {
    const [bottles, setBottles] = useState([])

    useEffect(()=>{
       fetch('bottles.json')
       .then(res=>res.json())
       .then(data => setBottles(data)) 
    },[])
    return (
        <div>
            <h1>How Much Bottles Here: {bottles.length}</h1>
            <div className='grid grid-cols-3 gap-5 p-4'>
                {
                    bottles.map(bottle=> <Bottle bottle={bottle} />)
                }
            </div>
        </div>
    );
};

export default Bottles;