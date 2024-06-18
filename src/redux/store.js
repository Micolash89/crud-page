import { configureStore } from "@reduxjs/toolkit";
import notificationReducer from "./features/NotificationSlice";
import loaderReducer from "./features/LoaderSlice";


export const store = configureStore({
    reducer: {
        notification: notificationReducer,
        loader: loaderReducer
    }
});