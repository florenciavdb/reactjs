import React from 'react';
import k from './Index.module.css';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

export default function Index () {

    return (
        <>
        <div className={k.Container}>

        <Grid container spacing={1}>
            
            <Grid item sx={12} sm={4} md={4} lg={4} className= {k.snow}>
                <img src={require('../../img/surf.png')} className= {k.imgSnow}alt='surf'/>
                <Link to='/category/Surf'><div className={k.imgSnow__overlay}>
                    <h4>SURF</h4>
                    <h5>SEE MORE</h5>
                </div>
                </Link>
            </Grid>

            <Grid item sx={12} sm={4} md={4} lg={4} className= {k.skate}>
                <img src={require('../../img/skate.png')} className= {k.imgSkate}alt='skate'/>
                <Link to='/category/Skate'><div className={k.imgSkate__overlay}>
                    <h4>SKATE</h4>
                    <h5>SEE MORE</h5>
                </div>
                </Link>
            </Grid>

            <Grid item sx={12} sm={4} md={4} lg={4}>
            <img src={require('../../img/brand.png')} className= {k.surf} alt='rasky'/>
            </Grid>

            <Grid item sx={12} sm={12} md={12} lg={12} className= {k.snow}>
                <img src={require('../../img/snow.png')} className= {k.imgSnow}alt='skate'/>
                <Link to='/category/Snow'><div className={k.imgSnow__overlay}>
                    <h4>SNOW</h4>
                    <h5>SEE MORE</h5>
                </div>
                </Link>
            </Grid>

        </Grid>
        </div>
        </>
    )
    
}