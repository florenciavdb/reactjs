import React, { useState, useContext } from 'react';
import { CartContext } from '../Cart/CartContext';
import { collection, getFirestore, addDoc, serverTimestamp } from 'firebase/firestore';
import w from './Form.module.css';
import { useForm } from "react-hook-form";


export default function Form({product}) {
  const [count, setCount] = useState(0)

  const {cart, totalValue, buyAll } = useContext(CartContext);

  const { handleSubmit } = useForm();

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
            items: cart,
        }

    console.log(buyer); 

    addDoc(ordersRef, buyer).then(({id}) => {
        console.log(buyer, id)
    });
    buyAll()
}

return (
  <>
    <div className={w.Container1}>
        <div className={w.box}>IMAGE</div>
        <div className={w.box}>PRODUCT</div>
        <div className={w.box}>QUANTITY</div>
        <div className={w.box}>PRICE</div>
        <div className={w.box}>TOTAL</div>
      </div>
      <div className={w.gridItems}>
        {cart.length > 0 &&
          cart.map((item) => (
            <div className={w.Container2}>
              <img className={w.boxImage} src={item.image} alt='product' />
              <div className={w.box}>{item.name}</div>
              <div className={w.box}>{item.quant}</div>
              <div className={w.box}>${item.price}</div>
              <div className={w.box}>${(item.price) * (item.quant)}</div>
            </div>
          ))}
      </div>
      <div className={w.totalPrice}>
        {cart.length > 0 &&
          <h3>TOTAL: ${totalValue}</h3>}
      </div>


{/*FORM*/}
            
  <form onSubmit={handleSubmit(onSubmit)} className={w.Form}>
          <div className={w.Name}>
            <label for="name">NAME: </label>
            <input type={'text'} name="name" value={name} onChange={(e) => {setName(e.currentTarget.value)}} placeholder="John Smith" required />
          </div>
          <hr />
          <div className={w.Email}>
            <label for="email">EMAIL: </label>
            <input type={'email'} name="email" value={email} onChange={(e) => {setEmail(e.currentTarget.value)}} placeholder="johnsmth@gmail.com" required />
          </div>
          <hr />
          <div className={w.Phone}>
            <label for="phone">PHONE: </label>
            <input type={'number'} name="phone" className="phone" value={phone} onChange={(e) => {setPhone(e.currentTarget.value);}} placeholder="+15854380024" required />
          </div>
          <hr />
          <button className={w.Butn} onClick={() => { finishPurchase()}}> FINISH PURCHASE </button>
      </form>
</>
)
}