import { createSlice } from '@reduxjs/toolkit'

export const userSettingsSlice = createSlice({
    name: 'userSettings',
    initialState: {
        defaultLocationId: 215849,
        theme: 'Light'
    },
    reducers: {
        updateDefaultLocation: (state, action) => {
            state.defaultLocationId = action.payload;
        },
        toggleTheme: (state, action) => {
            var checked = action.payload;
            state.theme = checked ? 'Dark' : 'Light';
        },
    },
})

export const { updateDefaultLocation, toggleTheme } = userSettingsSlice.actions

export default userSettingsSlice.reducer