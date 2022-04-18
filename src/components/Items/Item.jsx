import React from 'react';
import i from './css/Item.module.css';
import { Link } from 'react-router-dom';

function Item ({id, name, price, image}) {
    return (
        <div className={i.Container}>
            <div className={i.Card} key={id}>
                <img src={image} className={i.Image} />
                <hr />
                <div className={i.Name}>{name}</div>
                <div className={i.Price}>{price}</div>
                <hr />
                <Link to={`/item/${id}`}><button className={i.Detailsbtn}>Details</button></Link>
            </div>
        </div>
    )
}

export default Item;