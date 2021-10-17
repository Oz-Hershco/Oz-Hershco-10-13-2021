import { createSlice } from '@reduxjs/toolkit'

const userSettingsStorage = JSON.parse(localStorage.getItem("userSettingsStorage"));

export const userSettingsSlice = createSlice({
    name: 'userSettings',
    initialState: userSettingsStorage ? userSettingsStorage : {
        defaultLocationId: 215849,
        theme: 'Light'
    },
    reducers: {
        updateDefaultLocation: (state, action) => {
            state.defaultLocationId = action.payload;
            localStorage.setItem("userSettingsStorage", JSON.stringify(state));
        },
        toggleTheme: (state, action) => {
            var checked = action.payload;
            state.theme = checked ? 'Dark' : 'Light';
            localStorage.setItem("userSettingsStorage", JSON.stringify(state));
        },
    },
})

export const { updateDefaultLocation, toggleTheme } = userSettingsSlice.actions

export default userSettingsSlice.reducer