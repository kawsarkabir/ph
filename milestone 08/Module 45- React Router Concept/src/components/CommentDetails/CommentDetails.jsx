import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const CommentDetails = () => {
    const commentDetails = useLoaderData()
    const navigate = useNavigate()
    const handleGoBack=()=>{
        navigate(-1)
    }
    return (
        <div>
             <h1>Name: {commentDetails.name}</h1>
             <h2>Email:{commentDetails.email}</h2>
             <button  onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default CommentDetails;