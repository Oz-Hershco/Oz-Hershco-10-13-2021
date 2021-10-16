import React from 'react'
import { useHistory } from "react-router-dom";
import TempMetricToggle from '../TempMetricToggle/TempMetricToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartBroken, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import { toggleDefaultMetric, removeFavorite } from '../../Redux/Reducers/favoritesSlice';
import { updateDefaultLocation } from '../../Redux/Reducers/userSettingsSlice';
import { updateSelectedWeatherSlice } from '../../Redux/Reducers/selectedWeatherSlice';
import CustomDropdown from '../CustomDropdown/CustomDropdown';

import './FavoriteCard.scss';


export default function FavoriteCard(props) {

    let history = useHistory();
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);
    const userSettings = useSelector((state) => state.userSettings);

    const favorite = props.favorite;
    const currentTemperature = favorite.defaultdMetric === "f" ? favorite.currentWeather.temperature.f : favorite.currentWeather.temperature.c;
    const defaultLocationId = userSettings.defaultLocationId;

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
            <div className="FavoriteCard-Header" style={{ background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(${favorite.city.image})` }}>
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
