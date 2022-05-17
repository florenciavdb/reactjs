import React, {useContext, useState} from 'react';
import { CartContext } from '../Cart/CartContext';


export default function FinalData() {

    const {cart, totalValue } = useContext(CartContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    
    return (
       <>
       <div>
          {cart.length > 0 &&
            cart.map((item) => (
       <div> 
          <div>{item.name}</div>
          <div >{item.quant}</div>
          <div>{item.size}</div>
          <div>${item.price}</div>
          <div>${(item.price) * (item.quant)}</div>
        </div>
            ))}
        </div>
        <div>
          {cart.length > 0 &&  
          <h3>TOTAL: ${totalValue}</h3>}
        </div>

        <div>buyer</div>
       </>
    )
}