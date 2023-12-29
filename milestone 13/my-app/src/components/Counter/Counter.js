"use client";
import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>the counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Inscrease</button>
      <button onClick={() => setCounter(counter - 1)}>Discrease</button>
    </div>
  );
};

export default Counter;
