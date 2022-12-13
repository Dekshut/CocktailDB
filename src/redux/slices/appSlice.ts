import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        darkMode: true,
        mode3d: true
    },
    reducers: {
        toggleTheme(state, action) {
            state.darkMode = action.payload
        },
        toggle3dMode(state, action) {
            state.mode3d = action.payload
        }
    },
    extraReducers: {},
})

export const { toggleTheme, toggle3dMode } = appSlice.actions;

export default appSlice.reducer;