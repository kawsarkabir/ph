import PropType from 'prop-types'
import React from "react";

const Bottle = ({ bottle,handleAddToCart }) => {
  const { name, stock, img, price, ratings} = bottle;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} className="rounded-xl" />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title">{name}</h2>
           <p>Price: {price}</p>
          <div className="card-actions justify-between items-center">
          
          <button onClick={()=>handleAddToCart(bottle)} className="btn btn-primary">Purchase</button>
            
            <div className="badge badge-outline">Rating: {ratings}</div>
            <div className="badge badge-outline">Stock:{stock}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
Bottle.propTypes = {
  bottle:PropType.object.isRequired,
  handleAddToCart:PropType.func.isRequired
}
export default Bottle;
