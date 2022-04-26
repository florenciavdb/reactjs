import React, { useState } from 'react';
import ItemCount from './ItemCount';
import d from './css/ItemDetail.module.css';
import ItemSize from './ItemSize';
import { Link } from 'react-router-dom';

const ItemDetail = ({product}) => {

const [count, setCount] = useState(0)

    const onAdd = (amount) => {
        setCount(amount)
        return amount
    } 
        
    return (
            <div className={d.Container}>
                <img src={product.image} className={d.Image} />
                <div className={d.Content}>
                    <div className= {d.Name}>{product.name}</div>
                    <div className={d.Category}>{product.category}</div>
                    <div className= {d.Price}>${product.price}</div>
                    <div className={d.Description1}>{product.description1}</div>
                    <div className={d.Description2}>{product.description2}</div>
                    <div className={d.Description3}>{product.description3}</div>
                    <ItemSize sizes={product.sizes}/>
                       
                {count === 0 ? <ItemCount product={product} stock={product.stock} onAdd={onAdd} /> : <Link to='/cart' className={d.GoCart}>See Cart</Link> }
    
                </div>
            </div>
    )
}

export default ItemDetail;