import React, { useState, useContext } from 'react';
import { CartContext } from '../Cart/CartContext';
import { collection, getFirestore, addDoc, serverTimestamp } from 'firebase/firestore';
import w from './Form.module.css';
import { useForm } from "react-hook-form";
import Cart from '../Cart/Cart';
import EmptyCart from '../Cart/EmptyCart';

export default function Form({product}) {
  const [count, setCount] = useState(0)

    const onAdd = (amount) => {
        setCount(amount)
        return amount
    }

  const {cart, totalValue } = useContext(CartContext);

  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (data) => {
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  function finishPurchase() {
  
    const db = getFirestore();

    const ordersRef = collection (db, 'orders');

    let buyer = {
            buyer: {name, phone, email},
            total: totalValue,
            date: serverTimestamp(),
        }

    addDoc(ordersRef, buyer).then(({id}) => {
        console.log(buyer, id)
    });
}

  return (
    <>

    <form onSubmit={handleSubmit(onSubmit)} className={w.Form}>
        <div className={w.Name}>
          <label for="name">NAME: </label>
          <input type={'text'} name="name" value={name} onChange={(e) => {setName(e.currentTarget.value)}} placeholder="John Smith" required />
        </div>
        <hr />
        <div className={w.Email}>
          <label for="email">EMAIL: </label>
          <input type={'text'} name="email" value={email} onChange={(e) => {setEmail(e.currentTarget.value)}} placeholder="johnsmth@gmail.com" required />
        </div>
        <hr />
        <div className={w.Phone}>
          <label for="phone">PHONE: </label>
          <input type={'number'} name="phone" className="phone" value={phone} onChange={(e) => {setPhone(e.currentTarget.value);}} placeholder="+15854380024" required />
        </div>
        <hr />
      <button className={w.Btn} onClick={() => { finishPurchase()}}> FINISH PURCHASE </button>
    </form>
    </>
  );
}