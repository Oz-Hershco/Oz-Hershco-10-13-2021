import { createSlice } from '@reduxjs/toolkit'

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        addFavorite: (state, action) => {
            state.value.push(action.payload);
        },
        removeFavorite: (state, action) => {
            state.value = state.value.filter((v) => v.id === action.payload);
        },
        toggleDefaultMetric: (state, action) => {
            state.value = state.value.map((v) => {
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