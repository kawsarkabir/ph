import React, { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import { addToLocalStore, getStoredCart } from "../../utilities/localstored";
 

const Bottles = () => {
  const [bottles, setBottles] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  // Load LOcal Store Cart
  useEffect(()=>{
    if(bottles.length > 0){
      const storedCart = getStoredCart()
      console.log(storedCart);
    }
  }, [bottles])

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLocalStore(bottle.id)
  };

  return (
    <div>
      <h1>How Much Bottles Here: {bottles.length}</h1>
      <h1>ShoppingCart: {cart.length}</h1>
      <div className="grid lg:grid-cols-3 gap-5 p-4 md:grid-cols-2 grid-cols-1">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Bottles;
