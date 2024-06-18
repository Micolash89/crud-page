import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    state: false,
}

export const loaderSlice = createSlice({
    name: "loader",

    initialState,

    reducers: {

        loaderOn: (state) => {

            state.state = true;
        },

        loaderOff: (state) => {

            state.state = false;
        },

    }
});

export const { loaderOn, loaderOff } = loaderSlice.actions;

export default loaderSlice.reducer;