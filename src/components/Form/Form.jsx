import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../Cart/CartContext';
import { collection, getFirestore, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Form() {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const shipping = (qty) => qty * 100;

function finishPurchase() {
      
let buyer = {buyer: { name, phone, email },
};
console.log(buyer);

}

useEffect(() => {
console.log(name, email, phone);
}, [name, email, phone]);

const db =getFirestore();
    const ordersRef = collection (db, 'orders');
    const {cart, totalValue } = useContext(CartContext);
    
    useEffect (() => {

        let buyer = {
            buyer: {name, phone, email},
            total: "$ " + Number(totalValue + shipping(cart.length)),
            date: serverTimestamp(),
        }

    addDoc(ordersRef, buyer).then(({id}) => {
        console.log(id)
    });
}, []);

  return (
    <>
      <input type={'text'} value={name} onChange={(e) => {setName(e.currentTarget.value)}}/>

      <input type={'text'} value={email} onChange={(e) => {setEmail(e.currentTarget.value)}}/>

      <input type={'number'} value={phone} onChange={(e) => {setPhone(e.currentTarget.value);}}/>

      <button onClick={() => { finishPurchase()}}> Finish Purchase </button>
    </>
  );
}