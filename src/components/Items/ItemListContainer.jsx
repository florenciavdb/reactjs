import React, {useEffect, useState} from 'react';
import {getItems} from '../utils/products';
import ItemList from './ItemList';


export default function ItemListContainer () {
    const [products, setProducts]= useState ([]);

    useEffect(() => {
        getItems ()
        .then((res) => setProducts(res))
        .catch ((error) => console.log(error));
    }, []);

    return (
        <div>
        <ItemList products={products} />
        </div>
    )
}