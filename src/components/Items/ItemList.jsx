import React from 'react';
import Item from './Item';
import l from './css/ItemList.module.css';

function ItemList({ products }) {
    return (
        <>
            <div className={l.Container}>
                {products.map(product => (
                    <Item
                        id={product.id}
                        key={product.id}
                        image={product.image}
                        name={product.name}
                        category2={product.category2}
                        price={product.price}
                    />
                ))}
            </div>
        </>
    )
}

export default ItemList;