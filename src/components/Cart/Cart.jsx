import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import r from './Cart.module.css';
import { Link } from 'react-router-dom';
import ItemCount from '../Items/ItemCount';

const Cart = ({product}) => {
    const {cart, removeItem, buyAll, totalValue } = useContext(CartContext);

    const [count, setCount] = useState(0)

    const onAdd = (amount) => {
        setCount(amount)
        return amount
    } 

    return (
        <div className={r.Container}>
            <h2>SHOPPING CART</h2>
            <h3 className= {r.Length}>{cart.length} ITEMS</h3>
            {/*<div className= {r.itemsTittle}>
                <h4></h4>
                <h4>PRODUCT</h4>
                <h4>QUANTITY</h4>
                <h4>PRICE</h4>
                <h4>TOTAL</h4>
     </div>*/}
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
          
            <div className={r.btns}>
                <Link to='/'><button className={r.continueBtn}> CONTINUE SHOPPING </button></Link>
                <Link to='/form'><button className = {r.BuyBtn} onClick={buyAll}> BUY </button></Link>
            </div>
    </div>
  ); 
};

export default Cart;