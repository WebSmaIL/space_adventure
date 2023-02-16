import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {ISetUser, IState} from './interfaces'

const initialState: IState = {
    id: '',
    email: '',
    login: '',
    isAuthorize: false,
    balance: 0,
    level: 0,
};

const userSlice = createSlice ({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<ISetUser>) {
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.login = action.payload.login;
            state.balance = action.payload.balance;
            state.level = action.payload.level;
            state.isAuthorize = true;
        },
        removeUser(state) {
            state.id = '';
            state.email = '';
            state.login = '';
            state.balance = 0;
            state.level = 0;
            state.isAuthorize = false;
        },
    },
});

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;




