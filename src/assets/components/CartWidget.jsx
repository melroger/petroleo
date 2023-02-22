import React from 'react';
import { useState } from 'react';


const CartWidget = () => {
  const [counter, setCounter] = useState(0);
  const sumar = () =>{
    setCounter(counter + 1);
  };
  const restar = () =>{
    
    if (counter > 0){
      setCounter(counter - 1);
    }
  };
  return (
    <div className='cart'>
        <i className="fa-solid fa-cart-shopping" onClick={sumar}></i>
        <i  onClick={restar}>RESTAR</i>
        <span>{counter}</span>
    </div>
  )
}

export default CartWidget;