import React from 'react';
import classes from '../header_nav/header_nav.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header_nav = () => (

    <div className={classes.header_nav}>
        <nav>
            <FontAwesomeIcon icon={['fab', 'opencart']} />
            <a href="/">Главная</a>
            <a href="#">Лукбук</a>
            <a href="#">Акции</a>
            <a href="#">Sale</a>
            <a href="#">Про нас</a>
        </nav>
    </div>

);


export default Header_nav;