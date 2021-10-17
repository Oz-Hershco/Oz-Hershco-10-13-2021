import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import TempMetricToggle from '../TempMetricToggle/TempMetricToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartBroken, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import { NotificationManager } from 'react-notifications';
import { toggleDefaultMetric, removeFavorite } from '../../Redux/Reducers/favoritesSlice';
import { updateDefaultLocation } from '../../Redux/Reducers/userSettingsSlice';
import { updateSelectedWeatherSlice } from '../../Redux/Reducers/selectedWeatherSlice';
import { weatherAPIKey } from '../../Constants/Variables';

import CustomDropdown from '../CustomDropdown/CustomDropdown';

import './FavoriteCard.scss';


export default function FavoriteCard(props) {

    const axios = require('axios').default;
    let history = useHistory();
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);
    const userSettings = useSelector((state) => state.userSettings);
    const theme = userSettings.theme;

    const favorite = props.favorite;
    const currentTemperature = favorite.defaultdMetric === "f" ? favorite.currentWeather.temperature.f : favorite.currentWeather.temperature.c;
    const defaultLocationId = userSettings.defaultLocationId;

    useEffect(() => {
        getCityWeather();
        return () => {

        }
    }, [])

    const getCityWeather = () => {
        axios.get(`https://dataservice.accuweather.com/currentconditions/v1/${favorite.id}?apikey=${weatherAPIKey}`)
            .then(function (response) {
                var data = response.data[0];
                var weatherIcon = data.WeatherIcon;
                var weatherName = data.WeatherText;
 
                var newCurrentWeather = {
                    temperature: {
                        c: data.Temperature.Metric.Value,
                        f: data.Temperature.Imperial.Value
                    },
                    icon: `https://developer.accuweather.com/sites/default/files/${weatherIcon < 10 ? "0" + weatherIcon.toString() : weatherIcon}-s.png`
                }
                var newWeatherObject = {
                    id: favorite.id,
                    name: weatherName,
                    defaultdMetric: favorite.defaultdMetric,
                    currentWeather: newCurrentWeather,
                    city: {
                        id: favorite.city.id,
                        name: favorite.city.name,
                    },
                    country: favorite.country,
                    weatherforcast: favorite.weatherforcast
                };
                dispatch(updateSelectedWeatherSlice(newWeatherObject));
            })
            .catch(function (error) {
                NotificationManager.error('Something went wrong, please try again later.');
                console.log(error);
            });

    }

    const handleSelectedWeatherMetricToggle = (e) => {
        e.stopPropagation();
        dispatch(toggleDefaultMetric(favorite.id));
    }

    const handleRemoveSelectedWeatherFromFavorites = (e) => {
        e.stopPropagation();
        var indexOfSelectedFavoriteItem = favorites.findIndex((f) => f.id === favorite.id);
        dispatch(removeFavorite(indexOfSelectedFavoriteItem));
    }

    const handleUpdateDefaultLocation = (e) => {
        e.stopPropagation();
        dispatch(updateDefaultLocation(favorite.id));
    }

    const handleCardClick = () => {
        dispatch(updateSelectedWeatherSlice(favorite));
        history.push("/");
    }

    return (
        <div onClick={handleCardClick} className="FavoriteCard" >
            <div className={`FavoriteCard-Header-${theme}`} >
                <CustomDropdown id={`CustomDropdown-${favorite.id}`} items={[
                    <div onClick={(e) => { handleRemoveSelectedWeatherFromFavorites(e) }} className="FavoriteCard-OptionsDropdown-Option"><FontAwesomeIcon className="FavoriteCard-OptionsDropdown-Option-Unfavorite-Icon" icon={faHeartBroken} /> Remove from favorites</div>,
                    defaultLocationId.toString() !== favorite.id ? <div onClick={(e) => { handleUpdateDefaultLocation(e) }} className="FavoriteCard-OptionsDropdown-Option"><FontAwesomeIcon className="FavoriteCard-OptionsDropdown-Option-Location-Icon" icon={faMapMarkerAlt} /> Set as default location</div> : null
                ]} />
                {
                    defaultLocationId.toString() === favorite.id ?
                        (
                            <div className="FavoriteCard-Default-Location-Label">
                                <span>Default Location</span>
                            </div>
                        ) : null
                }

            </div>
            <div className="FavoriteCard-Body">
                <p className="FavoriteCard-City">{favorite.city.name}</p>
                <p className="FavoriteCard-Country">{favorite.country}</p>
                <div className="FavoriteCard-Weather-Details">
                    <img className="FavoriteCard-Weather-Image" src={favorite.currentWeather.icon} alt="weather" />
                    <p className="FavoriteCard-Temperature">{currentTemperature}</p>
                    <TempMetricToggle defaultdMetric={favorite.defaultdMetric} onClick={(e) => { handleSelectedWeatherMetricToggle(e) }} />
                </div>
                <p className="FavoriteCard-Temperature-Text">{favorite.name}</p>
            </div>
        </div >
    )
}
