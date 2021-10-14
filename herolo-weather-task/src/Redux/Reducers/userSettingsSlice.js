import { createSlice } from '@reduxjs/toolkit'

export const userSettingsSlice = createSlice({
    name: 'userSettings',
    initialState: {
        defaultLocationId: 215854,
        theme: 'Light'
    },
    reducers: {
        updateDefaultLocation: (state, action) => {
            state.defaultLocationId = action.payload;
        },
        toggleTheme: (state, action) => {
            state.theme = action.payload === 'Light' ? 'Dark' : 'Light';

        },
    },
})

export const { updateDefaultLocation, toggleTheme } = userSettingsSlice.actions

export default userSettingsSlice.reducer