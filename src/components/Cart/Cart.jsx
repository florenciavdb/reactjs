import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import r from './Cart.module.css';

const Cart = () => {
    const {cart, addItem, removeItem } = useContext(CartContext);

    return (
        <>
        <h3>CARRITOO!!</h3>
        
        
    </> 
    )          
}


export default Cart;