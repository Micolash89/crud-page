import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    state: false,
}

export const alumnosFormSlice = createSlice({
    name: "alumnosForm",

    initialState,

    reducers: {

        alumnosFormOn: (state) => {

            state.state = true;
        },

        alumnosFormOff: (state) => {

            state.state = false;
        },

    }
});

export const { alumnosFormOn, alumnosFormOff } = alumnosFormSlice.actions;

export default alumnosFormSlice.reducer;