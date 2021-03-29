import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon_FontAwesome = props => (
    <div style = {{color: props.color}}>
        <FontAwesomeIcon icon={[`${props.style}`, `${props.type}`]} />
    </div>
);

export default Icon_FontAwesome;
