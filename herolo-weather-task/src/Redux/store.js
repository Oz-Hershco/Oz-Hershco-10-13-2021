import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './Reducers/favoritesSlice';
import userSettingsReducer from './Reducers/userSettingsSlice';
import selectedWeatherReducer from './Reducers/selectedWeatherSlice';

export default configureStore({
  reducer: {
    favorites: favoritesReducer,
    userSettings: userSettingsReducer,
    selectedWeather: selectedWeatherReducer
  },
})