import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { UsersSlice, UserInfoSlice, PlanetsSlice, MiniGameSlice } from './ducks';
import storage from 'redux-persist/lib/storage';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REGISTER,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
} from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    MiniGameSlice,
    UsersSlice,
    UserInfoSlice,
    PlanetsSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
