import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {},
    state: null,
}

export const profesorUpdateSlice = createSlice({
    name: "profesorUpdate",

    initialState,

    reducers: {

        profesorUpdateOn: (state, action) => {

            state.state = true;
            state.value = action.payload;

        },

        profesorUpdateOff: (state) => {

            state.state = null;
            state.value = {};
        },

    }
});

export const { profesorUpdateOn, profesorUpdateOff } = profesorUpdateSlice.actions;

export default profesorUpdateSlice.reducer;