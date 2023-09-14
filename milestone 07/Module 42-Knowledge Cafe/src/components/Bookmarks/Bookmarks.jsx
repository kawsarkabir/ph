import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className='border w-1/3 mt-10 bg-blue-50 rounded-lg p-4'>
            <h1 className='text-center text-2xl font-medium'>Bookmark Blogs: {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark> )
            }
        </div>
    );
};

export default Bookmarks;