import { configureStore } from "@reduxjs/toolkit";
import allReducers from "./reducers";
import logger from "redux-logger";

const store = configureStore({
    reducer: allReducers,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});

export default store;