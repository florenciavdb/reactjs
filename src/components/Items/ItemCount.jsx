import React, {useState} from "react";
import c from "./ItemCount.module.css";

function ItemCount ({stock}) {
    const [count, setCount] = useState(0);

    function adding () {
        if(count < stock)
        setCount(count + 1);
    }

    function subs () {
        if(count > 0)
        setCount (count - 1);
    }

    function onAdd () {
        alert ("You added " + count + " items to your cart");
    }

    return (
        <div className={c.AllBtn}>
            <div className={c.Btns}>
                <button className={c.DecrementBtn} onClick={subs}>-</button>
                <p>{count}</p>
                <button className={c.IncrementBtn} onClick={adding}>+</button>
            </div>
            <button className={c.BuyBtn} onClick={onAdd}>Buy</button>
        </div>
    )
}

export default ItemCount;