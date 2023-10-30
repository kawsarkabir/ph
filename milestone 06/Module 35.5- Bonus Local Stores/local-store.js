const addProduct = () =>{
    const productField = document.getElementById('product-field')
    const productFieldValue = productField.value;
    const product = productFieldValue;

    const productQuantity = document.getElementById('product-quentity')
    const productQuentityValue = productQuantity.value;
    const quentity = productQuentityValue;
    displayProduct(product,quentity);
    saveProductToLocalStore(product, quentity)
}

const displayProduct =(product, quentity)=>{
    const containerDiv = document.getElementById('container-div')
    const p = document.createElement("p")
    p.innerText = `${product} ${quentity}`
    containerDiv.appendChild(p)
}


const getStoredShoppingCart = () =>{
    const storedCart = localStorage.getItem('cart');
    let cart = {}
    if(storedCart){
        cart = JSON.parse(storedCart)
    }
    return cart;
}

// local store  a data save
const saveProductToLocalStore = (product, quentity)=>{
    const cart = getStoredShoppingCart()
    cart[product] = quentity
    const cartStringify = JSON.stringify(cart)
    localStorage.setItem('cart',cartStringify)
}

const displayProductFromLocalStore =()=>{
    const savedCart = getStoredShoppingCart()
    console.log(savedCart);
    for(const product in savedCart){
        console.log(product);
    }

}
displayProductFromLocalStore()