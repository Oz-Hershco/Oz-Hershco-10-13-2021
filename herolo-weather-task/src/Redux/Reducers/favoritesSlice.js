import { createSlice } from '@reduxjs/toolkit'

const favoritesStorage = JSON.parse(localStorage.getItem("favoritesStorage"));
export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: favoritesStorage ? favoritesStorage : [],
    reducers: {
        addFavorite: (state, action) => {
            state.push(action.payload);
            localStorage.setItem("favoritesStorage", JSON.stringify(state));
        },
        removeFavorite: (state, action) => {
            state.splice(action.payload, 1);
            localStorage.setItem("favoritesStorage", JSON.stringify(state));
        },
        updateFavoriteField: (state, action) => {
            var favoriteId = action.payload[0];
            var favoriteMetric = action.payload[1];
            var favoriteTempValue = action.payload[2];

            state = state.map((v) => {
                if (v.id === favoriteId) {
                    switch (favoriteMetric) {
                        case "c":
                            v.currentWeather.temperature.c = favoriteTempValue;
                            break;
                        default:
                            v.currentWeather.temperature.f = favoriteTempValue;
                            break;
                    }
                }
                return v;
            });
            localStorage.setItem("favoritesStorage", JSON.stringify(state));

        },
        toggleDefaultMetric: (state, action) => {
            state = state.map((v) => {
                if (v.id === action.payload) {
                    v.defaultdMetric = v.defaultdMetric === "f" ? "c" : "f";
                }
                return v;
            });
            localStorage.setItem("favoritesStorage", JSON.stringify(state));
        },
    },
})

export const { addFavorite, removeFavorite, updateFavoriteField, toggleDefaultMetric } = favoritesSlice.actions

export default favoritesSlice.reducer