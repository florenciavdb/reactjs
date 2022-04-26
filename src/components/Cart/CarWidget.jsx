import React from 'react';
import { Link } from 'react-router-dom';
import w from './CarWidget.module.css';

export default function CarWidget (count) {
    
    return (
        <div className={w.Btn}><Link to={`/cart`}>🛒({count})</Link></div>
    )
};