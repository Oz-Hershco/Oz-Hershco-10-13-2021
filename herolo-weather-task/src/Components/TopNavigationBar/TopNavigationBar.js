import React from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Nav, Navbar, Container } from 'react-bootstrap';
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
        <Navbar className={`TopNavigationBar-${theme}`} expand="lg">
            <Container>
                <h2 className={`App-Title-${theme}`}>Herolo Weather Task</h2>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={`App-Nav-Toggle-${theme}`} />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className=" TopNavigationBar-Nav-Wrapper">
                        <div className="TopNavigationBar-LeftSide">
                            <SwitchButton defaultChecked={theme === "Dark"} labelText={`${theme} Theme`} onClick={handleThemeOnClick} />
                        </div>
                        <div className="TopNavigationBar-RightSide">
                            <Nav.Link href="#"><button onClick={() => { handleNavigationRouting(homeNavPath) }} className={homeNavButtonClass}>Home</button></Nav.Link>
                            <Nav.Link href="#"> <button onClick={() => { handleNavigationRouting(favoritesNavPath) }} className={favoritesNavButtonClass}>Favorites</button></Nav.Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        //         <header >
        //     <div className="TopNavigationBar-LeftSide">
        //         
        //     </div>
        //     <div className="TopNavigationBar-RightSide">
        //         <button onClick={() => { handleNavigationRouting(homeNavPath) }} className={homeNavButtonClass}>Home</button>
        //         <button onClick={() => { handleNavigationRouting(favoritesNavPath) }} className={favoritesNavButtonClass}>Favorites</button>
        //     </div>
        // </header> 
    )
}

