import { createSlice } from '@reduxjs/toolkit'

export const selectedWeatherSlice = createSlice({
    name: 'selectedWeatherSlice',
    initialState: {
        id: "215849",
        name: "Cloudy",
        defaultdMetric: 'c',
        currentWeather: {
            temperature: {
                c: 25.9,
                f: 79
            },
            icon: "https://developer.accuweather.com/sites/default/files/11-s.png"
        },
        city: {
            id: 215849,
            name: "Tel Aviv",
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
    reducers: {
        updateSelectedWeatherField: (state, action) => {
            var field = action.payload[0];
            var newValue = action.payload[1];
            state[field] = newValue;
        },
        updateSelectedWeatherSlice: (state, action) => {
            var newObject = action.payload;
            state.id = newObject.id;
            state.name = newObject.name;
            state.defaultdMetric = newObject.defaultdMetric;
            state.currentWeather = newObject.currentWeather;
            state.city = newObject.city;
            state.country = newObject.country;
            state.weatherforcast = newObject.weatherforcast;

        },
        toggleDefaultMetric: (state) => {
            state.defaultdMetric = state.defaultdMetric === "f" ? "c" : "f"
        },
    },
})

export const { updateSelectedWeatherSlice, toggleDefaultMetric, updateSelectedWeatherField } = selectedWeatherSlice.actions

export default selectedWeatherSlice.reducer