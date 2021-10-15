import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCity, faHeart as fullHeart, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons'

import TempMetricToggle from '../TempMetricToggle/TempMetricToggle';
import WeatherDaysForcast from '../WeatherDaysForcast/WeatherDaysForcast';
import { toggleDefaultMetric } from '../../Redux/Reducers/selectedWeatherSlice';
import { updateDefaultLocation } from '../../Redux/Reducers/userSettingsSlice';
import { addFavorite, removeFavorite } from '../../Redux/Reducers/favoritesSlice';

import './SelectedWeatherDisplay.scss';


export default function SelectedWeatherDisplay() {

    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);
    const selectedWeather = useSelector((state) => state.selectedWeather);
    const userSettings = useSelector((state) => state.userSettings);
    const currentTemperature = selectedWeather.defaultdMetric === "f" ? selectedWeather.currentWeather.temperature.f : selectedWeather.currentWeather.temperature.c;
    const defaultLocationId = userSettings.defaultLocationId;

    console.log(favorites);

    useEffect(() => {
        return () => {

        }
    }, [favorites, selectedWeather, userSettings])

    const handleSelectedWeatherMetricToggle = () => {
        dispatch(toggleDefaultMetric());
    }

    const handleUpdateDefaultLocation = () => {
        dispatch(updateDefaultLocation(selectedWeather.id));
    }

    const handleAddSelectedWeatherToFavorites = () => {
        if (favorites.filter(f => f.id === selectedWeather.id).length) {
            dispatch(removeFavorite(selectedWeather.id));
        } else {
            dispatch(addFavorite(selectedWeather));
        }
    }

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
                                <TempMetricToggle defaultdMetric={selectedWeather.defaultdMetric} onClick={handleSelectedWeatherMetricToggle} />
                            </div>
                        </div>
                    </div>
                    {
                        defaultLocationId === selectedWeather.id ?
                            (
                                <div className="Selected-Default-Location-Btn"><FontAwesomeIcon className="Location-Icon" icon={faMapMarkerAlt} /> Default Location</div>
                            ) :
                            (
                                <div onClick={handleUpdateDefaultLocation} className="Default-Location-Btn">Set as default location</div>
                            )
                    }
                </div>
                {
                    favorites.filter(f => f.id === selectedWeather.id).length ?
                        <div onClick={handleAddSelectedWeatherToFavorites} className="SelectedWeatherDisplay-Add-Favorites-Btn App-Accent-Button"><FontAwesomeIcon className="Favorites-Icon" icon={fullHeart} /> Added to favorites</div> :
                        <div onClick={handleAddSelectedWeatherToFavorites} className="SelectedWeatherDisplay-Add-Favorites-Btn App-Secondary-Outlined-Button"><FontAwesomeIcon className="Favorites-Icon" icon={emptyHeart} /> Add to favorites</div>
                }
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
