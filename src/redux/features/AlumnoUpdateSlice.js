import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {},
    state: null,
}

export const alumnoUpdateSlice = createSlice({
    name: "alumnoUpdate",

    initialState,

    reducers: {

        alumnoUpdateOn: (state, action) => {

            state.state = true;
            state.value = action.payload;

        },

        alumnoUpdateOff: (state) => {

            state.state = null;
            state.value = {};
        },

    }
});

export const { alumnoUpdateOn, alumnoUpdateOff } = alumnoUpdateSlice.actions;

export default alumnoUpdateSlice.reducer;