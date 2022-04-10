import React, {useEffect, useState} from 'react';
import { bringItems } from '../utils/products';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [products, setProducts]= useState ([]);

    useEffect(() => {
        bringItems ()
        .then((res) => setProducts(res))
        .catch(error => console.log(error));
    }, []
    );

    return (
        <div>
        <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;