import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import r from './Cart.module.css';
import {Link} from 'react-router-dom';

const CartSide = () => {
    const {cart, removeItem, totalValue, buyAll } = useContext(CartContext);

    return (
        <div className={r.Container}>
            
       <div className = {r.gridItems}>
          {cart.length > 0 &&
            cart.map((item) => (
              <div className= {r.ItemBuyDetails}>
                    <img className= {r.Picture} src={item.image} alt='product' />   
                    <span>{item.name}</span>
                    <span>{item.quant}</span>
                    <span>{item.size}</span>
                    <span>${item.price}</span>
                    <span>${(item.price) * (item.quant)}</span>
                    <button className={r.Remove} onClick={() => removeItem(item.id)}>REMOVE</button>
              </div>
            ))}
        </div>
        <div className = {r.totalPrice}>
          {cart.length > 0 &&  
          <h3>TOTAL: ${totalValue}</h3>}
        </div>
    </div>
  ); 
};

export default CartSide;