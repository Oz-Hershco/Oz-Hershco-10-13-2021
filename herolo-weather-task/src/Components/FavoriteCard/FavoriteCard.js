import React from 'react'
import TempMetricToggle from '../TempMetricToggle/TempMetricToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartBroken, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import { toggleDefaultMetric, removeFavorite } from '../../Redux/Reducers/favoritesSlice';
import { updateDefaultLocation } from '../../Redux/Reducers/userSettingsSlice';
import CustomDropdown from '../CustomDropdown/CustomDropdown';

import './FavoriteCard.scss';


export default function FavoriteCard(props) {

    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);
    const userSettings = useSelector((state) => state.userSettings);

    const favorite = props.favorite;
    const currentTemperature = favorite.defaultdMetric === "f" ? favorite.currentWeather.temperature.f : favorite.currentWeather.temperature.c;
    const defaultLocationId = userSettings.defaultLocationId;

    const handleSelectedWeatherMetricToggle = () => {
        dispatch(toggleDefaultMetric(favorite.id));
    }

    const handleRemoveSelectedWeatherFromFavorites = () => {
        var indexOfSelectedFavoriteItem = favorites.findIndex((f) => f.id === favorite.id);
        dispatch(removeFavorite(indexOfSelectedFavoriteItem));
    }

    const handleUpdateDefaultLocation = () => {
        dispatch(updateDefaultLocation(favorite.id));
    }

    console.log(defaultLocationId);
    console.log(favorite.id);

    return (
        <div className="FavoriteCard">
            <div className="FavoriteCard-Header" style={{ background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(${favorite.city.image})` }}>
                <CustomDropdown items={[
                    <div onClick={handleRemoveSelectedWeatherFromFavorites} className="FavoriteCard-OptionsDropdown-Option"><FontAwesomeIcon className="FavoriteCard-OptionsDropdown-Option-Unfavorite-Icon" icon={faHeartBroken} /> Remove from favorites</div>,
                    <div onClick={handleUpdateDefaultLocation} className="FavoriteCard-OptionsDropdown-Option"><FontAwesomeIcon className="FavoriteCard-OptionsDropdown-Option-Location-Icon" icon={faMapMarkerAlt} /> Set as default location</div>
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
                    <TempMetricToggle defaultdMetric={favorite.defaultdMetric} onClick={handleSelectedWeatherMetricToggle} />
                </div>
                <p className="FavoriteCard-Temperature-Text">{favorite.name}</p>
            </div>
        </div>
    )
}
