import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    state: true,
    theme: ""
}

export const themeSlice = createSlice({
    name: "theme",

    initialState,

    reducers: {

        themeLigth: (state) => {

            state.state = true;
            state.theme = ""
        },

        themeDark: (state) => {

            state.state = false;
            state.theme = "dark"
        },

    }
});

export const { themeLigth, themeDark } = themeSlice.actions;

export default themeSlice.reducer;