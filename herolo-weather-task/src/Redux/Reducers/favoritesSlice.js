import { createSlice } from '@reduxjs/toolkit'

const favoritesStorage = JSON.parse(localStorage.getItem("favoritesStorage"));
export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: [{
        id: "215849",
        name: "Cloudy",
        defaultdMetric: 'f',
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
            image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/View_of_Diamond_Exchange_Center_from_Azrieli_Center.jpg"
        },
        country: 'Israel',
        weatherforcast:
            [
                {
                    day: 'Mon',
                    temperature: {
                        c: 25.9,
                        f: 79
                    },
                    icon: "https://developer.accuweather.com/sites/default/files/11-s.png"
                },
                {
                    day: 'Tue',
                    temperature: {
                        c: 25.9,
                        f: 79
                    },
                    icon: "https://developer.accuweather.com/sites/default/files/11-s.png"
                },
                {
                    day: 'Wed',
                    temperature: {
                        c: 25.9,
                        f: 79
                    },
                    icon: "https://developer.accuweather.com/sites/default/files/11-s.png"
                },
                {
                    day: 'Thu',
                    temperature: {
                        c: 25.9,
                        f: 79
                    },
                    icon: "https://developer.accuweather.com/sites/default/files/11-s.png"
                },
                {
                    day: 'Thu',
                    temperature: {
                        c: 25.9,
                        f: 79
                    },
                    icon: "https://developer.accuweather.com/sites/default/files/11-s.png"
                }
            ]
    },
    {
        id: "215854",
        name: "Cloudy",
        defaultdMetric: 'f',
        currentWeather: {
            temperature: {
                c: 25.9,
                f: 79
            },
            icon: "https://developer.accuweather.com/sites/default/files/11-s.png"
        },
        city: {
            id: 215854,
            name: "Tel Aviv",
            image: "https://lp-cms-production.imgix.net/2019-06/8ec64b64e1d0805b1101f6c70c7f5b31-tel-aviv.jpg"
        },
        country: 'Israel',
        weatherforcast:
            [
                {
                    day: 'Mon',
                    temperature: {
                        c: 25.9,
                        f: 79
                    },
                    icon: "https://developer.accuweather.com/sites/default/files/11-s.png"
                },
                {
                    day: 'Tue',
                    temperature: {
                        c: 25.9,
                        f: 79
                    },
                    icon: "https://developer.accuweather.com/sites/default/files/11-s.png"
                },
                {
                    day: 'Wed',
                    temperature: {
                        c: 25.9,
                        f: 79
                    },
                    icon: "https://developer.accuweather.com/sites/default/files/11-s.png"
                },
                {
                    day: 'Thu',
                    temperature: {
                        c: 25.9,
                        f: 79
                    },
                    icon: "https://developer.accuweather.com/sites/default/files/11-s.png"
                },
                {
                    day: 'Thu',
                    temperature: {
                        c: 25.9,
                        f: 79
                    },
                    icon: "https://developer.accuweather.com/sites/default/files/11-s.png"
                }
            ]
    }],
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