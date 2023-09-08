import React from "react";
import Card from "../Card/Card";

const Cards = () => {
  return (
    <div className="mt-10 grid grid-cols-3 gap-4 container mx-auto px-4">
     <Card/>
     <Card/>
     <Card/>
    </div>
  );
};

export default Cards;
