import React from 'react';
import PropTypes from 'prop-types';

const Price = ({option}) => {
    const {gym_name, features, price} = option;
    return (
        <div className='p-5 bg-sky-300 rounded-lg space-y-3'>
            <h1>{gym_name}</h1>
            <h2>Price: {price}</h2>
             <ul className='space-y-2'>
                <li>{features[0]}</li>
                <li>{features[1]}</li>
             </ul>
        </div>
    );
};

Price.propTypes = {
    option:PropTypes.object
};

export default Price;