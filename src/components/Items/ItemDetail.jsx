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
                <img src={product.image} className={d.Image} alt='product'/>
                <div className={d.Content}>
                    <div className={d.Container2}>
                    <div className= {d.Name}>{product.name}</div>
                    <div className={d.Category2}>{product.category2}</div>
                    <hr />
                    <div className={d.Category}>{product.category}</div>
                    <hr />
                    <div className= {d.Price}>${product.price}</div>
                    <hr />
                    <div className={d.Description1}>{product.description1}</div>
                    </div>
                    <ItemSize sizes={product.sizes}/>
                       
                    {count === 0 ? <ItemCount product={product} stock={product.stock} onAdd={onAdd} /> : <Link to='/cart' className={d.GoCart}>SEE CART</Link> }
                </div>
            </div>
    )
}

export default ItemDetail;