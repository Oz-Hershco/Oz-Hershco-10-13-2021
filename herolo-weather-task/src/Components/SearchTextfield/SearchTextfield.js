import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {NotificationManager} from 'react-notifications';

import AutoCompleteDropdown from '../AutoCompleteDropdown/AutoCompleteDropdown';

import './SearchTextfield.scss';

function SearchTextfield(props) {

    const axios = require('axios').default;
    const [results, setResults] = useState([]);

    var placeholder = props.placeholder;

    const handleLocationSearch = (e) => {
        //add countdown after finish typing to start search after the last key up
        var value = e.currentTarget.value;
        if (value.length) {

            axios.get(`http://dataservice.accuweather.com/v1/cities/autocomplete?apikey=asdasd&q=${value}`)
                .then(function (response) {
                    if (response.data) {
                        setResults(response.data);
                    }
                })
                .catch(function (error) {
                    NotificationManager.error('Something went wrong, please try again later.');

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