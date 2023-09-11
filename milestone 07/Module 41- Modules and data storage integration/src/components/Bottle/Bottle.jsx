import React from "react";

const Bottle = ({ bottle }) => {
  const { name, stock, id, category, img, price, seller, ratings } = bottle;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} className="rounded-xl" />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title">{name}</h2>
           <p>Price: {price}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Rating: {ratings}</div>
            <div className="badge badge-outline">Stock:{stock}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottle;
