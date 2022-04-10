import React from 'react';
import i from "./Item.module.css";
import ItemCount from './ItemCount';

function Item ({id, name, price, image}) {
    return (
            <div className={i.Card} key={id}>
                <img src={image} className={i.Image} />
                <hr />
                <div className={i.Name}>{name}</div>
                <div className={i.Price}>{price}</div>
                <hr />
                <button className={i.Detailsbtn}>Details</button>
            </div>
    )
}

export default Item;