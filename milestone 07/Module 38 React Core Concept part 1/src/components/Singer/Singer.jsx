import React from 'react';

const Singer = ({singer}) => {
    // [id, name, age] = [singer]
    // console.log(singer);
    return (
        <div>
            <div>
                <h1>Singer:{singer.name}</h1>
                <p>age: {singer.age}</p>
            </div>
        </div>
    );
};

export default Singer;