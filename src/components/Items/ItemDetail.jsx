import React, { useState } from 'react';
import ItemCount from './ItemCount';
import d from './css/ItemDetail.module.css';
import ItemSize from './ItemSize';

const ItemDetail = ({product}) => {

const [count, setCount] = useState(0)

    const add = (amount) => {
        setCount(amount)
    };
    
    
    return (
            <div className={d.Container}>
                <img src={product.image} className={d.Image} />
                <div className={d.Content}>
                    <div className= {d.Name}>{product.name}</div>
                    <div className={d.Category}>{product.category}</div>
                    <div className= {d.Price}>{product.price}</div>
                    <div className={d.Description1}>{product.description1}</div>
                    <div className={d.Description2}>{product.description2}</div>
                    <div className={d.Description3}>{product.description3}</div>
                    <ItemSize size={product.size}/>
                    <ItemCount stock={product.stock} add={add}/>     
                </div>
            </div>
    )
}

export default ItemDetail;