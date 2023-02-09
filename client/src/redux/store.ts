import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { UsersSlice } from "./ducks";

const rootReducer = combineReducers({
    UsersSlice
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
