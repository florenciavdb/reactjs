import React, {useEffect, useState} from 'react';
import {getItems} from '../../utils/products';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

export default function ItemListContainer () {
    const [products, setProducts]= useState ([]);
    const { categoryId } = useParams ();
    console.log(categoryId);

    useEffect(() => {
        getItems (categoryId)
        .then((res) => setProducts(res))
        .catch ((error) => console.log(error));
    }, [categoryId]);

    return (
        <div>
        <ItemList products={products} />
        </div>
    )
}