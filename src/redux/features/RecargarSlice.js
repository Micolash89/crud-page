import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    state: null,
}

export const recargarSlice = createSlice({
    name: "recargar",

    initialState,

    reducers: {

        recargarActualizar: (state) => {
            state.state = state.state ? null : true;
        }
    }
});

export const { recargarOn, recargarOff, recargarActualizar } = recargarSlice.actions;

export default recargarSlice.reducer;