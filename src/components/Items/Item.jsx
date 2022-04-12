import React from 'react';
import i from "./Item.module.css";

function Item ({id, name, price, image}) {
    return (
        <div className={i.Container}>
            <div className={i.Card} key={id}>
                <img src={image} className={i.Image} />
                <hr />
                <div className={i.Name}>{name}</div>
                <div className={i.Price}>{price}</div>
                <hr />
                <button className={i.Detailsbtn}>Details</button>
            </div>
        </div>
    )
}

export default Item;