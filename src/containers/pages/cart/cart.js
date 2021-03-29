import React from 'react'
import classes from './cart.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Cart = () => (
    <div className={classes.cartPage}>
        <FontAwesomeIcon icon={['fab', 'opencart']} />
    </div>
);

export default Cart;