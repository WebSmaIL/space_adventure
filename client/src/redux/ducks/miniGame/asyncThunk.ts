import { createAsyncThunk } from '@reduxjs/toolkit';
import { IMiniGame, IUpDateScore, MyKnownError,  } from './interfaces';
import axios from 'axios';

export const fetchUpDateScore = createAsyncThunk<
    IMiniGame,
    IUpDateScore,
    { rejectValue: MyKnownError }
>('minigames/fetchUpDateScore', async (gameinfo, thunkApi) => {
    const response = await axios.post('http://localhost:8000/api/minigames', gameinfo );
    if (response.status === 500) {
        return thunkApi.rejectWithValue((await response.data) as MyKnownError);
    } else {
        return await response.data;
    }
});
