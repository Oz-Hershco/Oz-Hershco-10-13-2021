import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { NotificationManager } from 'react-notifications';
import { weatherAPIKey } from '../../Constants/Variables';

import AutoCompleteDropdown from '../AutoCompleteDropdown/AutoCompleteDropdown';

import './SearchTextfield.scss';

function SearchTextfield(props) {

    const axios = require('axios').default;
    const [results, setResults] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [typingTimer, setTypingTimer] = useState(null);

    var doneTypingInterval = 1000;
    var placeholder = props.placeholder;

    const handleLocationSearch = () => {
        if (searchValue.length) {
            axios.get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${weatherAPIKey}&q=${searchValue}`)
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

    const resetResults = () => {
        setResults([]);
        setSearchValue("");
    }

    const handleOnKeyUp = () => {
        clearTimeout(typingTimer);
        setTypingTimer(setTimeout(handleFinishedTyping, doneTypingInterval))
    }

    const handleOnKeyDown = () => {
        clearTimeout(typingTimer);
    }



    const handleFinishedTyping = () => {
        handleLocationSearch();
    }

    return (
        <div className="SearchTextfield">
            <FontAwesomeIcon className="SearchTextfield-Icon" icon={faSearch} />
            <input value={searchValue} className="SearchTextfield-Input" placeholder={placeholder} onKeyUp={handleOnKeyUp} onKeyDown={handleOnKeyDown} onChange={(e) => { setSearchValue(e.currentTarget.value) }} type="text" />
            <AutoCompleteDropdown items={results} resetResults={resetResults} />
        </div>
    );
}

export default SearchTextfield;