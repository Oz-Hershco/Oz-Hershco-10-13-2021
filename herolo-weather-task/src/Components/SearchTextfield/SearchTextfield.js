import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { autoCompleteSearch } from '../../jsonTestingData';
import { handleAutoCompleteAPI } from '../../Constants/Functions';

import AutoCompleteDropdown from '../AutoCompleteDropdown/AutoCompleteDropdown';

import './SearchTextfield.scss';

function SearchTextfield(props) {

    const [results, setResults] = useState([]);

    var placeholder = props.placeholder;

    const handleLocationSearch = (e) => {
        //add countdown after finish typing to start search after the last key up
        //add error catching toast
        var value = e.currentTarget.value;
        if (value.length) {
            handleAutoCompleteAPI(value).then((val) => {
                // if (val)
                //     console.log(val);
                setResults(val.data);
            }).catch(function (error) {
                // handle error
                console.log(error);
            });
        } else {
            setResults([]);
        }

    }
    return (
        <div className="SearchTextfield">
            <FontAwesomeIcon className="SearchTextfield-Icon" icon={faSearch} />
            <input className="SearchTextfield-Input" placeholder={placeholder} onChange={(e) => { handleLocationSearch(e) }} type="text" />
            <AutoCompleteDropdown items={results} />
        </div>
    );
}

export default SearchTextfield;