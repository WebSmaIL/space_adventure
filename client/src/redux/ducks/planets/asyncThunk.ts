import { createAsyncThunk } from '@reduxjs/toolkit';
import { IPlanet } from './interfaces';
import { API } from '../../../api';

export const fetchPlanets = createAsyncThunk<
    IPlanet[],
    undefined,
    { rejectValue: string }
>('planets/fetchPlanets', async () => {
    const response = await API.get('planets');
    return response.data;
});
