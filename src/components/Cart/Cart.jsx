import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
import r from './Cart.module.css';

const Cart = () => {
    const {cart, removeItem, buyAll, product } = useContext(CartContext);

    return (
        <>
        <h3>CARRITOO!!</h3>
        <button className={r.Remove} onClick={removeItem}>Remove product</button>
        <button className={r.Add}>Add product</button>
        <button className={r.Clear}>Clear Cart</button>
    </> 
    )
}

export default Cart;