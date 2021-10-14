import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './Reducers/favoritesSlice';
import userSettingsReducer from './Reducers/userSettingsSlice';

export default configureStore({
  reducer: {
    favorites: favoritesReducer,
    userSettings: userSettingsReducer
  },
})