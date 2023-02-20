import { createAsyncThunk } from "@reduxjs/toolkit";
import {IUser, IUserRegister} from './interfaces'

interface MyKnownError {
    message: string;
}

export const fetchRegister = createAsyncThunk<IUser, IUserRegister, { rejectValue: MyKnownError }>(
    'user/fetchRegister',
    async (user, thunkApi) => {
        const res = await fetch('https://websmail.store/api/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
          });
        
        if(res.status === 500) {
            return thunkApi.rejectWithValue((await res.json()) as MyKnownError);
        } else {
            return await res.json();
        }
});

interface IUserLogin {
  login: string,
  password: string
}

export const fetchLogin = createAsyncThunk<IUser, IUserLogin, { rejectValue: MyKnownError }>(
    'user/fetchLogin',
    async (info, thunkApi) => {
        const res = await fetch(`https://websmail.store/api/users/getbylogin/login:${info.login}&password:${info.password}`);
        
        if(res.status === 500) {
            return thunkApi.rejectWithValue((await res.json()) as MyKnownError);
        } else {
            return await res.json();
        }
});