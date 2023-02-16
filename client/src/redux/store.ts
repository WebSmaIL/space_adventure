import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { UsersSlice, UserInfoSlice, PlanetsSlice } from "./ducks";

const rootReducer = combineReducers({
    UsersSlice, UserInfoSlice, PlanetsSlice
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
