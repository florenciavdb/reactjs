import React, { useEffect, useState } from 'react';
import ItemDetail from "./ItemDetail";
import { getItem } from '../../utils/products.js';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState ({});
    const {id} = useParams ();

    useEffect (() => {
        getItem(id)
        .then((res) => {
            setProduct(res)
        })
        .catch((error) => {
            console.log(error);
        });
    }, [id]);

    return (
        <>
        <ItemDetail product={product}/>
        </>
    )
}

export default ItemDetailContainer;
