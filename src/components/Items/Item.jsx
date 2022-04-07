import React from 'react';
import i from "./Item.module.css";
import ItemCount from './ItemCount';

function Item ({id, name, price, image}) {
    return (
        <div className={i.Container}>
            <div className={i.Card} key={id}>
                <img src={image} className={i.Image} />
                <div className={i.Name}>{name}</div>
                <div className={i.Price}>{price}</div>
                <ItemCount stock={10}/>
            </div>
        </div>
    )
}

export default Item;