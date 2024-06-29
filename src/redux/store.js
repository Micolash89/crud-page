import { configureStore } from "@reduxjs/toolkit";
import notificationReducer from "./features/NotificationSlice";
import loaderReducer from "./features/LoaderSlice";
import userReducer from "./features/UserSlice";
import profesorFormReducer from "./features/ProfesorFormSlice";
import recargarReducer from "./features/RecargarSlice";
import profesorUpdateReducer from "./features/ProfesorUpdateSlice";


export const store = configureStore({
    reducer: {
        notification: notificationReducer,
        loader: loaderReducer,
        user: userReducer,
        profesorForm: profesorFormReducer,
        recargar: recargarReducer,
        profesorUpdate: profesorUpdateReducer,
    }
});