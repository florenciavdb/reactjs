import React, {useState} from "react";
import c from "./css/ItemCount.module.css";

function ItemCount ({stock, add}) {
    const [count, setCount] = useState(1);

    function adding () {
        if(count < stock)
        setCount(count + 1);
    }

    function subs () {
        if(count > 1)
        setCount (count - 1);
    }

    return (
        <div className={c.AllBtn}>
            <div className={c.Btns}>
                <button className={c.DecrementBtn} onClick={subs}>-</button>
                <p className={c.Count}>{count}</p>
                <button className={c.IncrementBtn} onClick={adding}>+</button>
            </div>
            <button className={c.BuyBtn} onClick={()=>add(count)}>Buy</button>
        </div>
    )
}

export default ItemCount;