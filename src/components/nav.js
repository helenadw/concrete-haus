import React from 'react';
import logo from './logo.svg';
import './nav.scss';

export default function Nav(){

    return(
        <div class='nav-wrapper'>
            <div class='logo-wrapper'>
              <img src={logo} alt='Logo' class='logo'></img>

            </div>
        </div>
    )
}; 