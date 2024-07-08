import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    state: false,
}

export const menuSlice = createSlice({
    name: "menu",

    initialState,

    reducers: {

        menuOn: (state) => {

            state.state = true;
        },

        menuOff: (state) => {

            state.state = false;
        },

    }
});

export const { menuOn, menuOff } = menuSlice.actions;

export default menuSlice.reducer;