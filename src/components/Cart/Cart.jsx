import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import r from './Cart.module.css';
import { Link } from 'react-router-dom';
import ItemCount from '../Items/ItemCount';

const Cart = ({product}) => {
    const {cart, removeItem, buyAll, totalValue } = useContext(CartContext);

    const [count, setCount] = useState(0)

    return (
      
        <div className={r.Container}>
            <h2>SHOPPING CART</h2>
            <h3 className= {r.Length}>{cart.length} ITEMS</h3>
      <div className = {r.gridItems}>
          {cart.length > 0 &&
            cart.map((item) => (
       <div className={r.Container2}>
        <img className= {r.boxImage} src={item.image} alt='product' />  
          <div className={r.box}>{item.name}</div>
          <div className={r.box}>{item.quant}</div>
          <div className={r.box}>{item.size}</div>
          <div className={r.box}>${item.price}</div>
          <div className={r.box}>${(item.price) * (item.quant)}</div>
          <button className={r.boxBtn} onClick={() => removeItem(item.id)}>REMOVE</button>
        </div>
            ))}
        </div>
        <div className = {r.totalPrice}>
          {cart.length > 0 &&  
          <h3>TOTAL: ${totalValue}</h3>}
        </div>
        
            <div className={r.btns}>
                <Link to='/'><button className={r.continueBtn}> Continue Shopping </button></Link>
                <Link to='/form'><button className = {r.BuyBtn}> CheckOut </button></Link>
            </div>
    </div>
  ); 
};

export default Cart;