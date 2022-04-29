import React, { useEffect, useState } from 'react';
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import {doc, getDoc, getFirestore } from 'firebase/firestore';

export default function ItemDetailContainer () {
    
    const [product, setProduct] = useState ({});
    const {id} = useParams ();


    useEffect (() => {
        const db = getFirestore();

        const productRef = doc(db, 'products', id)

        getDoc(productRef).then((res) => {
            setProduct({id:res.id, ...res.data() });
        });
    }, [id]);

    return (
        <>
            <ItemDetail
                product={product}
                id={id}
                 />
        </>
    )
}
