import { createSlice } from '@reduxjs/toolkit';
import { IState } from './interfaces';
import { fetchLogin, fetchRegister } from './asyncThunk';
const initialState: IState = {
    userInfo: {
        id: '',
        email: '',
        login: '',
        isAuthorize: false,
        balance: 0,
        level: 0,
    },
    isLoading: false,
    errorMessage: undefined,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        zeroingError: (state) => {
            state.errorMessage = undefined;
        },
    },
    extraReducers: (builder) => {
        builder

            // REGISTER
            .addCase(fetchRegister.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchRegister.fulfilled, (state, action) => {
                state.userInfo.id = action.payload.id;
                state.userInfo.email = action.payload.email;
                state.userInfo.login = action.payload.login;
                state.userInfo.level = action.payload.level;
                state.userInfo.balance = action.payload.balance;
                state.userInfo.isAuthorize = true;
                state.errorMessage = undefined;

                state.isLoading = false;
            })
            .addCase(fetchRegister.rejected, (state, action) => {
                state.errorMessage = action.payload?.message;
                state.isLoading = false;
            })

            // LOGIN
            .addCase(fetchLogin.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchLogin.fulfilled, (state, action) => {
                state.userInfo.id = action.payload.id;
                state.userInfo.email = action.payload.email;
                state.userInfo.login = action.payload.login;
                state.userInfo.level = action.payload.level;
                state.userInfo.balance = action.payload.balance;
                state.userInfo.isAuthorize = true;
                state.errorMessage = undefined;

                state.isLoading = false;
                console.log(action.payload.id);
            })
            .addCase(fetchLogin.rejected, (state, action) => {
                state.errorMessage = action.payload?.message;
                state.isLoading = false;
            });
    },
});

export const { zeroingError } = userSlice.actions;

export default userSlice.reducer;
