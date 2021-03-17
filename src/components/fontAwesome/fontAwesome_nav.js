import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

const FontAwesome_nav = () => (
    <div>
        <FontAwesomeIcon icon={['fab', 'apple']} />
        <FontAwesomeIcon icon={['fab', 'microsoft']} />
        <FontAwesomeIcon icon={['fab', 'google']} />
    </div>
);


export default FontAwesome_nav;
