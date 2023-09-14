import React from 'react';

const Bookmark = ({bookmark}) => {
    return (
        <div className='shadow-md py-5 mt-4 px-4 rounded-lg bg-blue-100'>
            <h1 className='text-2xl'>{bookmark.title}</h1>
        </div>
    );
};

export default Bookmark;