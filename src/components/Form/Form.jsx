import React, { useState, useContext } from 'react';
import { CartContext } from '../Cart/CartContext';
import { collection, getFirestore, addDoc, serverTimestamp, getDoc } from 'firebase/firestore';
import w from './Form.module.css';

export default function Form({product}) {
  const [count, setCount ] = useState(0)

  const [checkoutConfirmation, setCheckoutConfirmation] = useState(false)
  const toggleCheckoutConfirmation = () => {
    setCheckoutConfirmation(!checkoutConfirmation);
  }

  const [checkoutOrder, setCheckoutOrder] = useState([]);

  const {buyAll} = useContext(CartContext);

    const onAdd = (amount) => {
        setCount(amount)
        return amount
    }

  const {cart, totalValue } = useContext(CartContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  function finishPurchase() {
  
    const db = getFirestore();

    const ordersRef = collection (db, 'orders');

    let buyer = {
            buyer: {name, phone, email},
            items: cart,
            total: totalValue,
            date: serverTimestamp(),
        }
        
        getDoc(ordersRef).then(snapshot=>{
          if (snapshot.exists()){
            setCheckoutOrder(snapshot.data());
          }
        })
      }

  return (
    <>
    <div className = {w.gridItems}>
          {cart.length > 0 &&
            cart.map((item) => (
       <div className={w.Container2}> 
          <div className={w.boxName}>{item.name}</div>
          <div className={w.box}>{item.quant}</div>
          <div className={w.box}>{item.size}</div>
          <div className={w.box}>${item.price}</div>
          <div className={w.box}>${(item.price) * (item.quant)}</div>
        </div>
            ))}
        </div>
        <div className = {w.totalPrice}>
          {cart.length > 0 &&  
          <h3>TOTAL: ${totalValue}</h3>}
        </div>


{/*FORM*/}

    <form className={w.Form}>
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
  );
}