import React from 'react'

import './WeatherDaysForcast.scss';

export default function WeatherDaysForcast(props) {
    var forcastArray = props.forcastArray;
    var defaultdMetric = props.defaultdMetric;

    return (
        <div className="WeatherDaysForcast">
            {
                forcastArray.map((item, i) => {
                    const currentTemperature = defaultdMetric === "f" ? item.temperature.f : item.temperature.c;
                    return (
                        <div className="WeatherDaysForcast-Column" key={i}>
                            <p className="WeatherDaysForcast-Column-Text">{item.day}</p>
                            <div className="WeatherDaysForcast-Column-Icon-Container">
                                <img className="WeatherDaysForcast-Column-Icon" src={item.icon} alt="weather state" />
                            </div>
                            <p className="WeatherDaysForcast-Column-Text">{currentTemperature}°</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
