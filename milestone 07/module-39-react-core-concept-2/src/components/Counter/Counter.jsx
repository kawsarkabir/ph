import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleCount = ()=> setCount(count + 1)
    return (
        <div>
            <h1 className="text-center text-5xl">Counter: {count}</h1>
            <button onClick={handleCount}>Count Me</button>
        </div>
    );
};

export default Counter;