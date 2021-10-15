import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './SearchTextfield.scss';

function SearchTextfield(props) {
    var placeholder = props.placeholder;
    const handleLocationSearch = (e)=>{
        var value = e.currentTarget.value;
    }
    return (
        <div className="SearchTextfield">
            <FontAwesomeIcon className="SearchTextfield-Icon" icon={faSearch} />
            <input className="SearchTextfield-Input" placeholder={placeholder} onChange={(e)=>{handleLocationSearch(e)}} type="text" />
        </div>
    );
}

export default SearchTextfield;