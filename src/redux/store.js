import { configureStore } from "@reduxjs/toolkit";
import notificationReducer from "./features/NotificationSlice";
import loaderReducer from "./features/LoaderSlice";
import userReducer from "./features/UserSlice";
import profesorFormReducer from "./features/ProfesorForm";


export const store = configureStore({
    reducer: {
        notification: notificationReducer,
        loader: loaderReducer,
        user: userReducer,
        profesorForm: profesorFormReducer,

    }
});