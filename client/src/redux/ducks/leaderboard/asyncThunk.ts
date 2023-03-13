import { createAsyncThunk } from '@reduxjs/toolkit';
import { ILeaderBoard } from './interfaces';
import axios from 'axios';

interface IGetLeader {
    table: string
}

export interface MyKnownError {
    message: string;
}

export const fetchLeaders = createAsyncThunk<
    ILeaderBoard[],
    IGetLeader,
    { rejectValue: MyKnownError }
>('planets/fetchLeaders', async (tableInfo, thunkApi) => {
    const response = await axios.get(`http://localhost:8000/api/leaders/:${tableInfo.table}`);

    if (response.status === 500) {
        return thunkApi.rejectWithValue((await response.data) as MyKnownError);
    } else {
        return await response.data;
    }
});
