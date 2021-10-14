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
        <header className="TopNavigationBar">
            <div className="TopNavigationBar-LeftSide">
                <h2 className="App-Title">Herolo Weather Task</h2>
                <SwitchButton labelText={`${theme} Theme`} onClick={handleOnClick} />
            </div>
            <div className="TopNavigationBar-RightSide">
                <button>button 1</button>
                <button>button 2</button>
            </div>
        </header>
    )
}
