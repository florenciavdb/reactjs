import {React, useContext} from 'react';
import CarWidget from '../Cart/CarWidget';
import n from "./Navbar.module.css";
import { Link } from 'react-router-dom';
import { CartContext } from '../Cart/CartContext';

export default function Navbar () {
  let {totalCount} = useContext(CartContext);

  return (

    <div className={n.Menu}>
      <img src = {require('../../img/logo1.png')} className= {n.Logo}/>

      <div className={n.Options}>
        <Link to='/category/Men'>MEN</Link>
        <Link to='/category/Women'>WOMEN</Link>
        <Link to='/category/Kids'>KIDS</Link>
        <Link to='/category/Snow'>SNOW</Link>
        <Link to='/category/Surf'>SURF</Link>
        <Link to='/category/Skate'>SKATE</Link>
        <Link to='/Cart'><CartContext count={totalCount}/></Link>
      </div>

      <div className={n.CarW}>
        <CarWidget  />
      </div>
      
    </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
  )
}; 