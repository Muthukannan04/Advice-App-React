import {useState} from 'react'

const Cart = () => {
    const[cartCount,setCartCount]=useState(0); 
    const handleClick=()=>setCartCount(cartCount+1);
  return (
    <>
      <h1>No.of items in the Cart : {cartCount}</h1>
      <button onClick={handleClick}>Add to cart</button>
    </>
  )
}

export default Cart
