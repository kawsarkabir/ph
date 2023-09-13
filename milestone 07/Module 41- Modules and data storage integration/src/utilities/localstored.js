/* const getStored = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  }return [];
};

const addToLs = (id) => {
    const cart = getStored();
    cart.push(id);

  // save to cart in LS
  const saveToLs = (cart) => {
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem("cart", cartStringify);
  };
  saveToLs(cart);
  
};

export { addToLs };
 */

const getStoredCart = ()=>{
    const storedCartSting = localStorage.getItem('cart');
    if(storedCartSting){
        return JSON.parse(storedCartSting)
    } return []
}

const addToLocalStore = (id)=>{
    const cart = getStoredCart()
    cart.push(id)

    // save to Local Store
    const saveToLocalStore = (cart) =>{
        const cartStringify = JSON.stringify(cart)
        localStorage.setItem('cart', cartStringify)
    }
    saveToLocalStore(cart)
}
export {addToLocalStore, getStoredCart}