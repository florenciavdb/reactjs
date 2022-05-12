import React from 'react';
import i from './css/Item.module.css';
import { Link } from 'react-router-dom';

function Item ({id, name, price, image, category2}) {
    return (
        <div className={i.Container}>
            <div className={i.Card} key={id}>
                <img src={image} className={i.Image} alt='product'/>
                <hr />
                <div className={i.Name}>{name}</div>
                <div className={i.Category2}>{category2}</div>
                <div className={i.Price}>${price}</div>
                <hr />
                <Link to={`/item/${id}`}><button className={i.Detailsbtn}>DETAILS</button></Link>
            </div>
        </div>
    )
}

export default Item;