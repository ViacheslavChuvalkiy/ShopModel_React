import React from 'react';
import classes from '../button/button.css';

const Button = props => {

    const cls = [
        "Button",
        props.type
    ];

    return (
        <button
            className={cls.join(' ')}
            onClick={props.onClick}

        >
            {props.children}
        </button>
    )
};

export default Button;