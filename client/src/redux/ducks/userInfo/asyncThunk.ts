import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    IUploadAvatar,
    IUser,
    IUserLogin,
    IUserRegister,
    MyKnownError,
} from './interfaces';
import { API } from '../../../api';
import axios from 'axios';

export const fetchRegister = createAsyncThunk<
    IUser,
    IUserRegister,
    { rejectValue: MyKnownError }
>('user/fetchRegister', async (user, thunkApi) => {
    const res = await API.post('users', {
        email: user.email,
        login: user.login,
        password: user.password,
    });

    if (res.status === 500) {
        return thunkApi.rejectWithValue((await res.data) as MyKnownError);
    } else {
        return await res.data;
    }
});

export const fetchLogin = createAsyncThunk<
    IUser,
    IUserLogin,
    { rejectValue: MyKnownError }
>('user/fetchLogin', async (info, thunkApi) => {
    const res = await API.get(
        `users/getbylogin/login:${info.login}&password:${info.password}`
    );

    if (res.status === 500) {
        return thunkApi.rejectWithValue((await res.data) as MyKnownError);
    } else {
        return await res.data;
    }
});

export const uploadAvatar = createAsyncThunk<
    IUser,
    IUploadAvatar,
    { rejectValue: MyKnownError }
>('user/uploadAvatar', async (info, thunkApi) => {
    let data = new FormData();
    data.append('file', info.img);
    data.append('userId', info.id);

    const res = await axios.post(`http://localhost:8000/api/users/upload`, data);

    if (res.status === 500) {
        return thunkApi.rejectWithValue((await res.data) as MyKnownError);
    } else {
        return await res.data;
    }
});
