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
        toggleDefaultMetric: (state, action) => {
            state = state.map((v) => {
                if (v.id === action.payload) {
                    v.defaultdMetric = v.defaultdMetric === "f" ? "c" : "f";
                }
                return v;
            });
        },
    },
})

export const { addFavorite, removeFavorite, toggleDefaultMetric } = favoritesSlice.actions

export default favoritesSlice.reducer