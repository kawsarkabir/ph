import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError()
    console.log(error);
    return (
        <div className='text-center flex  flex-col justify-center items-center'>
            <h1 >oopsss!!</h1>
            <p> 
                {
                    error.statusText || error.message
                } 

            </p>
        </div>
    );
};

export default Error;