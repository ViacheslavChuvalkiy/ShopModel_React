import React from 'react';
import classes from '../header_nav/header_nav.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {NavLink} from "react-router-dom";

const Header_nav = () => (

    <div className={classes.header_nav}>
        <nav>
            <NavLink
                to = {'/cart'}>
                <FontAwesomeIcon icon={['fab', 'opencart']} />
            </NavLink>
            <a href="/">Главная</a>
            <a href="/lookBook">Лукбук</a>
            <a href="/sale">Акции</a>
            <a href="/sale">Sale</a>
            <a href="#">Про нас</a>
            <a href="/admin">Админ</a>
        </nav>
    </div>

);


export default Header_nav;