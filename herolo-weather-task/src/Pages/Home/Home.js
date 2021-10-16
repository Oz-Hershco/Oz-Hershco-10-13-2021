import React from 'react'
import { useSelector } from 'react-redux';

import SelectedWeatherDisplay from '../../Components/SelectedWeatherDisplay/SelectedWeatherDisplay';
import SearchTextfield from '../../Components/SearchTextfield/SearchTextfield';

import './Home.scss';

export default function Home() {

    const userSettings = useSelector((state) => state.userSettings);
    const theme = userSettings.theme;

    return (
        <div className={`App-Body-${theme} Home`}>
            <SearchTextfield placeholder="Look up a city..."/>
            <SelectedWeatherDisplay />
        </div>
    )
}
