import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './Textfield.scss';

function Textfield(props) {
    var placeholder = props.placeholder;
    var onChange = props.onChange;
    return (
        <div className="Textfield">
            <FontAwesomeIcon className="Textfield-Search-Icon" icon={faSearch} />
            <input className="Textfield-Input" placeholder={placeholder} onChange={onChange} type="text" />
        </div>
    );
}

export default Textfield;