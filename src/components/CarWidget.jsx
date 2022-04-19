import * as React from 'react';
import { Link } from 'react-router-dom';
import w from './CarWidget.module.css';

export default function CarWidget () {
    return (
        <div className={w.Btn}>
        <Link to={`/cart`}>🛒</Link>
        </div>
    )
};
