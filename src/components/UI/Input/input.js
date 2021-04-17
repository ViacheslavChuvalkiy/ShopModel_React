import React from 'react'
import classes from '../Input/input.css'

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched;
}

const Input = props => {

    const inputType = props.type || 'text';
    const cls = ["Input"];
    const htmlFor = `${inputType} - ${Math.random()}`;

    let isValid = isInvalid(props);

    if(isValid){
        cls.push(classes.invalid)
    }

    return(
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                type= {inputType}
                id = {htmlFor}
                value={props.value}
                onChange={props.onChange}
            />

            { isValid ?
            cls.push(classes.invalid) : null
            }
        <span>{props.errorMessage}</span>
        </div>

    )

}

export default Input