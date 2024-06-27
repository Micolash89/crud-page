import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    state: false,
}

export const profesorFormSlice = createSlice({
    name: "profesorForm",

    initialState,

    reducers: {

        profesorFormOn: (state) => {

            state.state = true;
        },

        profesorFormOff: (state) => {

            state.state = false;
        },

    }
});

export const { profesorFormOn, profesorFormOff } = profesorFormSlice.actions;

export default profesorFormSlice.reducer;