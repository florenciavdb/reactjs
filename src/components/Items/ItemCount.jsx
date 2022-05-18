import React from 'react';
import c from "./css/ItemCount.module.css";
import { useState, useContext } from 'react';
import { CartContext } from '../Cart/CartContext';

function ItemCount({ stock, onAdd, product }) {

    const { addItem } = useContext(CartContext);

    const [count, setCount] = useState(0);

    function adding() {
        if (count < stock)
            setCount(count + 1);
    }

    function subs() {
        if (count > 0)
            setCount(count - 1);
    }

    return (
        <div className={c.AllBtn}>
            <div className={c.Btns}>
                <button className={c.DecrementBtn} onClick={subs}>-</button>
                <p className={c.Count}>{count}</p>
                <button className={c.IncrementBtn} onClick={adding}>+</button>
            </div>
            <button className={c.AddBtn} onClick={() => addItem(product, onAdd(count))}> ADD TO CART</button>
        </div>
    )
}

export default ItemCount;