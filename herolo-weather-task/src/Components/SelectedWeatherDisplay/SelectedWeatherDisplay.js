import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCity, faHeart as fullHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons'

import TempMetricToggle from '../TempMetricToggle/TempMetricToggle';

import './SelectedWeatherDisplay.scss';
import WeatherDaysForcast from '../WeatherDaysForcast/WeatherDaysForcast';

export default function SelectedWeatherDisplay() {

    const selectedWeather = useSelector((state) => state.selectedWeather);
    const currentTemperature = selectedWeather.defaultdMetric === "f" ? selectedWeather.currentWeather.temperature.f : selectedWeather.currentWeather.temperature.c;
    useEffect(() => {
        return () => {

        }
    }, [selectedWeather])

    return (
        <div className="SelectedWeatherDisplay" style={{ background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${selectedWeather.city.image})` }}>
            <div className="SelectedWeatherDisplay-Header">
                <div>
                    <div className="City-Info-Container">
                        <FontAwesomeIcon className="City-Icon" icon={faCity} />
                        <div className="City-Info">
                            <p className="City-Name">{selectedWeather.city.name}</p>
                            <div className="City-Temperature-Container">
                                <p className="City-Temperature">{currentTemperature}</p>
                                <TempMetricToggle />
                            </div>
                        </div>
                    </div>
                    <div className="SelectedWeatherDisplay-Default-Location-Btn">Set as default location</div>
                </div>
                <div className="SelectedWeatherDisplay-Add-Favorites-Btn App-Secondary-Outlined-Button"><FontAwesomeIcon className="Favorites-Icon" icon={fullHeart} /> Add to favorites</div>
            </div>
            <div className="SelectedWeatherDisplay-Body">
                <p className="SelectedWeatherDisplay-WeatherText">{selectedWeather.name}</p>
            </div>
            <div className="SelectedWeatherDisplay-Footer">
                <WeatherDaysForcast defaultdMetric={selectedWeather.defaultdMetric} forcastArray={selectedWeather.weatherforcast} />
            </div>
        </div>
    )
}
