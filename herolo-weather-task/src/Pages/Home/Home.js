import React from 'react'
import { useSelector } from 'react-redux';
import SelectedWeatherDisplay from '../../Components/SelectedWeatherDisplay/SelectedWeatherDisplay';

import './Home.scss';

export default function Home() {

    const userSettings = useSelector((state) => state.userSettings);
    const theme = userSettings.theme;

    return (
        <div className={`Home-${theme}`}>
            <input type="text" />
            <SelectedWeatherDisplay />
        </div>
    )
}
