import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../Redux/Reducers/userSettingsSlice';

import './TopNavigationBar.scss';
import SwitchButton from '../SwitchButton/SwitchButton';

export default function TopNavigationBar() {

    const userSettings = useSelector((state) => state.userSettings);
    const theme = userSettings.theme;
    const dispatch = useDispatch();
    const handleOnClick = (checked) => { dispatch(toggleTheme(checked)) }
    return (
        <header className={`TopNavigationBar-${theme}`}>
            <div className="TopNavigationBar-LeftSide">
                <h2 className={`App-Title-${theme}`}>Herolo Weather Task</h2>
                <SwitchButton labelText={`${theme} Theme`} onClick={handleOnClick} />
            </div>
            <div className="TopNavigationBar-RightSide">
                <button className={theme === "Light" ? "App-Primary-Button" : "App-Secondary-Button"}>Home</button>
                <button className={theme === "Light" ? "App-Primary-Text-Button" : "App-Secondary-Text-Button"}>Favorites</button>
            </div>
        </header>
    )
}
