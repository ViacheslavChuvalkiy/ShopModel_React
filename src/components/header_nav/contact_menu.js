import React from 'react'
import classes from '../header_nav/header_nav.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact_menu = () => (
    <div className={classes.contact_menu}>
        <FontAwesomeIcon icon={['fab', 'mobile']} />
        <FontAwesomeIcon icon={['fab', 'envelope']} />
        <FontAwesomeIcon icon={['fab', 'facebook-square']} />
        <FontAwesomeIcon icon={['fab', 'instagram']} />
    </div>
);


export default Contact_menu;
