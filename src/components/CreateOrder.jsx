import React, { useContext, useEffect } from 'react';
import { CartContext } from './Cart/CartContext';
import { collection, getDocs, getFirestore, query, where, addDoc } from 'firebase/firestore';
import q from './CreateOrder.module.css';

export default function CreateOrder ({product}) {
    const db =getFirestore();
    const ordersRef = collection (db, 'orders');
    const {cart, totalValue } = useContext(CartContext);
    
    useEffect (() => {

        let buyer = {
            buyer: {name:'flor', phone:'456456', email:'asdad'},
            items: cart,
            total: totalValue
        }

    addDoc(ordersRef, buyer).then(({id}) => {
        console.log(id)
    });
}, []);

    return (
        <>
        </>
    )
}