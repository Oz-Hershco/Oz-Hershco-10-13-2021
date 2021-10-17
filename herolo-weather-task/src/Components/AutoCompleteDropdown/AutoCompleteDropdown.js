import React from 'react'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { NotificationManager } from 'react-notifications';
import { weatherAPIKey } from '../../Constants/Variables';

import './AutoCompleteDropdown.scss';
import { updateSelectedWeatherSlice } from '../../Redux/Reducers/selectedWeatherSlice';

export default function AutoCompleteDropdown(props) {

    const axios = require('axios').default;
    const dispatch = useDispatch();

    const items = props.items;
    const resetResults = props.resetResults;

    const handleLocationSelect = (cityId, cityName, CountryName) => {

        //uncomment when ready
        //get current weather of city
        axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${cityId}?apikey=${weatherAPIKey}`)
            .then(function (response) {
                var data = response.data[0];
                var weatherIcon = data.WeatherIcon;
                var weatherName = data.WeatherText;
                console.log(weatherName)
                var newCurrentWeather = {
                    temperature: {
                        c: data.Temperature.Metric.Value,
                        f: data.Temperature.Imperial.Value
                    },
                    icon: `https://developer.accuweather.com/sites/default/files/${weatherIcon < 10 ? "0" + weatherIcon.toString() : weatherIcon}-s.png`
                }
                var newWeatherForcast;

                //get current weather forcast in c
                axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityId}?apikey=${weatherAPIKey}&metric=true`)
                    .then(function (response) {
                        var data = response.data;
                        newWeatherForcast = [...data.DailyForecasts.map((forecast) => {
                            return {
                                day: moment(forecast.Date).format("ddd"),
                                temperature: {
                                    c: forecast.Temperature.Minimum.Value,
                                    f: 0
                                },
                                icon: `https://developer.accuweather.com/sites/default/files/${forecast.Day.Icon < 10 ? "0" + forecast.Day.Icon.toString() : forecast.Day.Icon}-s.png`
                            }
                        })]

                        var newWeatherObject = {
                            id: cityId,
                            name: weatherName,
                            defaultdMetric: 'c',
                            currentWeather: newCurrentWeather,
                            city: {
                                id: cityId,
                                name: cityName,
                            },
                            country: CountryName,
                            weatherforcast: newWeatherForcast
                        };

                        dispatch(updateSelectedWeatherSlice(newWeatherObject));

                    })
                    .catch(function (error) {
                        NotificationManager.error('Something went wrong, please try again later.');
                        console.log(error);
                    });
                resetResults();
            })
            .catch(function (error) {
                NotificationManager.error('Something went wrong, please try again later.');
                console.log(error);
            });




    }

    return (
        items && items.length ? <div className="AutoCompleteDropdown">
            {
                items.map((item, i) => {
                    return (<div onClick={() => { handleLocationSelect(item.Key, item.LocalizedName, item.Country.LocalizedName) }} key={i} className="AutoCompleteDropdown-Option">{item.LocalizedName}</div>)
                })
            }
        </div> : null
    )
}
