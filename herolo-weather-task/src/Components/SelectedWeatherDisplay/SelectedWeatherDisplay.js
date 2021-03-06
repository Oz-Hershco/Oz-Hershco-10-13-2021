import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCity, faHeart as fullHeart, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons'
import { NotificationManager } from 'react-notifications';

import TempMetricToggle from '../TempMetricToggle/TempMetricToggle';
import WeatherDaysForcast from '../WeatherDaysForcast/WeatherDaysForcast';
import { toggleDefaultMetric, updateSelectedWeatherField } from '../../Redux/Reducers/selectedWeatherSlice';
import { updateDefaultLocation } from '../../Redux/Reducers/userSettingsSlice';
import { addFavorite, removeFavorite } from '../../Redux/Reducers/favoritesSlice';
import { weatherAPIKey } from "../../Constants/Variables";

import './SelectedWeatherDisplay.scss';

export default function SelectedWeatherDisplay() {

    const axios = require('axios').default;
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);
    const selectedWeather = useSelector((state) => state.selectedWeather);
    const userSettings = useSelector((state) => state.userSettings);
    const currentTemperature = selectedWeather.defaultdMetric === "f" ? selectedWeather.currentWeather.temperature.f : selectedWeather.currentWeather.temperature.c;
    const defaultLocationId = userSettings.defaultLocationId;
    const theme = userSettings.theme;

    useEffect(() => {

        getCurrentWeatherDisplay();
        return () => {

        }
    }, [])

    const getCurrentWeatherDisplay = async () => {


        //get current weather of city
        await axios.get(`https://dataservice.accuweather.com/currentconditions/v1/${selectedWeather.id}?apikey=${weatherAPIKey}`)
            .then(function (response) {
                var data = response.data[0];
                var weatherIcon = data.WeatherIcon;
                var weatherNAme = data.WeatherText;
                var newCurrentWeather = {
                    temperature: {
                        c: data.Temperature.Metric.Value,
                        f: data.Temperature.Imperial.Value
                    },
                    icon: `https://developer.accuweather.com/sites/default/files/${weatherIcon < 10 ? "0" + weatherIcon.toString() : weatherIcon}-s.png`

                }
                dispatch(updateSelectedWeatherField(["currentWeather", newCurrentWeather]));
                dispatch(updateSelectedWeatherField(["name", weatherNAme]));
            })
            .catch(function (error) {
                NotificationManager.error('Something went wrong, please try again later.');
                console.log(error);
            });

        //get current weather forcast in c
        await axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${selectedWeather.id}?apikey=${weatherAPIKey}&metric=${selectedWeather.defaultdMetric === 'c' ? 'true' : 'false'}`)
            .then(function (response) {
                var data = response.data;
                var newWeatherForcast = [...data.DailyForecasts.map((forecast) => {
                    return {
                        day: moment(forecast.Date).format("ddd"),
                        temperature: {
                            c: forecast.Temperature.Minimum.Value,
                            f: forecast.Temperature.Minimum.Value
                        },
                        icon: `https://developer.accuweather.com/sites/default/files/${forecast.Day.Icon < 10 ? "0" + forecast.Day.Icon.toString() : forecast.Day.Icon}-s.png`
                    }
                })]
                dispatch(updateSelectedWeatherField(["weatherforcast", newWeatherForcast]))
            })
            .catch(function (error) {
                NotificationManager.error('Something went wrong, please try again later.');
                console.log(error);
            });

    }

    const handleSelectedWeatherMetricToggle = () => {

        var defaultdMetric = selectedWeather.defaultdMetric;
        //get current weather forcast in f/c based on default metric value
        axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${selectedWeather.id}?apikey=${weatherAPIKey}&metric=${defaultdMetric === 'c' ? 'false' : 'true'}`)
            .then(function (response) {
                var data = response.data;
                var newWeatherForcast = [...data.DailyForecasts.map((forecast) => {
                    return {
                        day: moment(forecast.Date).format("ddd"),
                        temperature: {
                            c: forecast.Temperature.Minimum.Value,
                            f: forecast.Temperature.Minimum.Value
                        },
                        icon: `https://developer.accuweather.com/sites/default/files/${forecast.Day.Icon < 10 ? "0" + forecast.Day.Icon.toString() : forecast.Day.Icon}-s.png`
                    }
                })]
                dispatch(toggleDefaultMetric());
                dispatch(updateSelectedWeatherField(["weatherforcast", newWeatherForcast]))
            })
            .catch(function (error) {
                NotificationManager.error('Something went wrong, please try again later.');
                console.log(error);
            });
    }

    const handleUpdateDefaultLocation = () => {
        dispatch(updateDefaultLocation(selectedWeather.id));
    }

    const handleAddSelectedWeatherToFavorites = () => {
        dispatch(addFavorite(selectedWeather));
    }

    const handleRemoveSelectedWeatherFromFavorites = () => {
        var indexOfSelectedFavoriteItem = favorites.findIndex((f) => f.id === selectedWeather.id);
        dispatch(removeFavorite(indexOfSelectedFavoriteItem));
    }

    return (
        <div className={`SelectedWeatherDisplay-${theme}`}>
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
                        defaultLocationId.toString() === selectedWeather.id ?
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
                        (
                            <div onClick={handleRemoveSelectedWeatherFromFavorites} className="SelectedWeatherDisplay-Add-Favorites-Btn App-Accent-Button"><FontAwesomeIcon className="Favorites-Icon" icon={fullHeart} /> Added to favorites</div>
                        ) :
                        (
                            <div onClick={handleAddSelectedWeatherToFavorites} className="SelectedWeatherDisplay-Add-Favorites-Btn App-Secondary-Outlined-Button"><FontAwesomeIcon className="Favorites-Icon" icon={emptyHeart} /> Add to favorites</div>
                        )
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
