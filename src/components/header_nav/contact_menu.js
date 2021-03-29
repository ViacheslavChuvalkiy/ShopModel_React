import React from 'react'
import classes from '../header_nav/header_nav.module.css'

import Icon_FontAwesome from '../fontAwesome/iconFontAwesome'

const Contact_menu = () => (
    <div className={classes.contact_menu}>
        <Icon_FontAwesome
            style = 'fa'
            type = 'mobile-alt'
        />
        <Icon_FontAwesome
            style = 'fa'
            type = 'envelope'
        />
        <Icon_FontAwesome
            style = 'fab'
            color = 'blue'
            type = 'facebook-square'
        />
        <Icon_FontAwesome
            style = 'fab'
            color = 'orange'
            type = 'instagram'
        />

    </div>
);


export default Contact_menu;
