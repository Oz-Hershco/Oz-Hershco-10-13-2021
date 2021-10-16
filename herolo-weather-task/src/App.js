import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {NotificationContainer} from 'react-notifications';
import Home from './Pages/Home/Home';
import Favorites from "./Pages/Favorites/Favorites";
import TopNavigationBar from './Components/TopNavigationBar/TopNavigationBar';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <TopNavigationBar />
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
        </Switch>
      </Router>
      <NotificationContainer/>
    </div>
  );
}

export default App;
