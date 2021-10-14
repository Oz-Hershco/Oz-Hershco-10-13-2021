import { createSlice } from '@reduxjs/toolkit'

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        value: [{
            id: "215849",
            name: "Cloudy",
            defaultdMetric:'f',
            currentWeather: {
                temperature: {
                    c: 25.9,
                    f: 79
                },
                icon: "https://developer.accuweather.com/sites/default/files/11-s.png"
            },
            city: {
                id: 215849,
                name: "Ramat Gan",
                image:"https://upload.wikimedia.org/wikipedia/commons/2/2b/View_of_Diamond_Exchange_Center_from_Azrieli_Center.jpg"
            },
            country: 'Israel'
        }],
    },
    reducers: {
        addFavorite: (state, action) => {
            state.value.push(action.payload);
        },
        removeFavorite: (state, action) => {
            state.value = state.value.filter((v) => v.id === action.payload);
        },
        toggleDefaultMetric: (state, action) => {
            state.value = state.value.map((v)=>{
                if(v.id === action.payload){
                    v.defaultdMetric = v.defaultdMetric === "f" ? "c" : "f";
                }
                return v;
            });
        },
    },
})

export const { addFavorite, removeFavorite, toggleDefaultMetric } = favoritesSlice.actions

export default favoritesSlice.reducer