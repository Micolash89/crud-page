import { configureStore } from "@reduxjs/toolkit";
import notificationReducer from "./features/NotificationSlice";
import loaderReducer from "./features/LoaderSlice";
import userReducer from "./features/UserSlice";
import profesorFormReducer from "./features/ProfesorFormSlice";
import alumnosFormReducer from "./features/AlumnoFormSlice";
import recargarReducer from "./features/RecargarSlice";
import profesorUpdateReducer from "./features/ProfesorUpdateSlice";
import alumnoUpdateReducer from "./features/AlumnoUpdateSlice";
import themeReducer from "./features/ThemeSlice";


export const store = configureStore({
    reducer: {
        notification: notificationReducer,
        loader: loaderReducer,
        user: userReducer,
        profesorForm: profesorFormReducer,
        alumnoForm: alumnosFormReducer,
        recargar: recargarReducer,
        profesorUpdate: profesorUpdateReducer,
        alumnoUpdate: alumnoUpdateReducer,
        theme: themeReducer,
    }
});