
import * as React from 'react';
import CarWidget from './CarWidget';

export default function Navbar () {
  return (
    <>
    <div class="Menu">
    <img src = {require ("../logo1.png")} class="Logo"/>
    <div class="Options">
    <span>MEN</span>
    <span>WOMEN</span>
    <span>KIDS</span>
    <span>SHOES</span>
    <span>SNOW</span>
    <span>SURF</span>
    <span>SKATE</span>
    </div>
    <CarWidget />
    </div>
    </>
  )
}; 