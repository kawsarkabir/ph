import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Comment = ({comment}) => {
    const {name, email, body, id}  = comment
    const navigate = useNavigate()
    const handleClickMe=()=>{
        navigate(`/comment/${id}`)
    }
    return (
        <div className='bg-blue-300 p-5 rounded-lg drop-shadow-lg'>
            <h1>Name: {name}</h1>
            <p>Email: {email}</p>
            <p>{body}</p>
            <Link to={`/comment/${id}`}><button className='btn btn-primary btn-sm'>Details</button></Link>
            <button onClick={handleClickMe}>Click me</button>
        </div>
    );
};

export default Comment;