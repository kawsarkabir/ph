import React from 'react';
import { Link } from 'react-router-dom';

const SingleUser = ({singleUser}) => {
    return (
        <div className='p-4 bg-sky-200 rounded-lg'>
            <h1>Name: {singleUser.name}</h1>
            <p>Email: {singleUser.email}</p>
            <Link to={`/singleUser/${singleUser.id}`} className='btn btn-sm ml-8 mt-4 btn-primary'>show Details</Link>
            
        </div>
    );
};

export default SingleUser;