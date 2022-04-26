import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import r from './Cart.module.css';
import { Link } from 'react';

const Cart = () => {
    const {cart, removeItem, buyAll } = useContext(CartContext);

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
                    <img className= {r.Picture} src={item.image} />   
                    <span>{item.name}</span>
                    <span>HELP{item.count}</span>
                    <span>{item.price}</span>
                    <span>{(item.price) * (item.count)}</span>
                    <button className={r.Remove} onClick={() => removeItem(item.id)}> Remove</button>
              </div>
            ))}
        </div>
            <div className={r.btns}>
                {/*<Link to='/'><button className={r.continueBtn}> Continue Shopping </button></Link>*/}
                <button className = {r.BuyBtn} onClick={buyAll}> Buy </button>
            </div>
    </div>
  ); 
};

export default Cart;