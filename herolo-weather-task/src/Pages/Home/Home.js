import React from 'react'
import { useSelector } from 'react-redux';

import SelectedWeatherDisplay from '../../Components/SelectedWeatherDisplay/SelectedWeatherDisplay';
import Textfield from '../../Components/Textfield/Textfield';

import './Home.scss';

export default function Home() {

    const userSettings = useSelector((state) => state.userSettings);
    const theme = userSettings.theme;

    return (
        <div className={`Home-${theme}`}>
            <Textfield placeholder="Look up a city..."/>
            <SelectedWeatherDisplay />
        </div>
    )
}
