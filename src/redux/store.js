import { configureStore } from "@reduxjs/toolkit";
import notificationReducer from "./features/NotificationSlice";
import loaderReducer from "./features/LoaderSlice";
import userReducer from "./features/UserSlice";


export const store = configureStore({
    reducer: {
        notification: notificationReducer,
        loader: loaderReducer,
        user: userReducer,

    }
});