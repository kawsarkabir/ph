import React from 'react';

const Link = ({route}) => {
    return (
        <div>
            <li className='mr-6 my-6'>{route.name}</li>
        </div>
    );
};

export default Link;