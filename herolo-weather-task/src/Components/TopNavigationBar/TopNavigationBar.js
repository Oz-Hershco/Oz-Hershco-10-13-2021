import React from 'react';
import { useHistory,useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../Redux/Reducers/userSettingsSlice';

import './TopNavigationBar.scss';
import SwitchButton from '../SwitchButton/SwitchButton';

export default function TopNavigationBar() {

    var homeNavPath = "/";
    var favoritesNavPath = "/favorites";

    let history = useHistory();
    let location = useLocation();

    const userSettings = useSelector((state) => state.userSettings);
    const theme = userSettings.theme;
    const dispatch = useDispatch();


    const handleThemeOnClick = (checked) => { dispatch(toggleTheme(checked)) }
    const handleNavigationRouting = (path) => {
        history.push(path);
    }

    const homeNavButtonClass = location.pathname === homeNavPath ? (theme === "Light" ? "App-Primary-Button" : "App-Secondary-Button") : (theme === "Light" ? "App-Primary-Text-Button" : "App-Secondary-Text-Button");
    const favoritesNavButtonClass = location.pathname === favoritesNavPath ? (theme === "Light" ? "App-Primary-Button" : "App-Secondary-Button") : (theme === "Light" ? "App-Primary-Text-Button" : "App-Secondary-Text-Button");

    return (
        <header className={`TopNavigationBar-${theme}`}>
            <div className="TopNavigationBar-LeftSide">
                <h2 className={`App-Title-${theme}`}>Herolo Weather Task</h2>
                <SwitchButton defaultChecked={theme === "Dark"} labelText={`${theme} Theme`} onClick={handleThemeOnClick} />
            </div>
            <div className="TopNavigationBar-RightSide">
                <button onClick={() => { handleNavigationRouting(homeNavPath) }} className={homeNavButtonClass}>Home</button>
                <button onClick={() => { handleNavigationRouting(favoritesNavPath) }} className={favoritesNavButtonClass}>Favorites</button>
            </div>
        </header>
    )
}
