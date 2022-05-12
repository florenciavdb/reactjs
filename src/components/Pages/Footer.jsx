import React from 'react';
import f from './Footer.module.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer () {
    return (
        <div className={f.Footer}>
            <div className={f.allContent}>
            <p>SEE OUR UPCOMING EVENTS!</p>
            <div className={f.Icons}>
                <WhatsAppIcon fontSize="large" />
                <InstagramIcon fontSize="large"/>
                <FacebookIcon fontSize="large"/>
            </div>
            </div>
        </div>
    )
}