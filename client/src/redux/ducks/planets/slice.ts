import {  createSlice } from '@reduxjs/toolkit';
import { IPlanet } from './interfaces';
import { fetchPlanets } from './asyncThunk';

const initialState: {list: IPlanet[], loading: boolean} = {
    list: [],
    loading: false
};

const userSlice = createSlice({
    name: 'planets',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPlanets.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchPlanets.fulfilled, (state, action) => {
            state.list = action.payload;
            state.loading = false;
        })
    },
});

export default userSlice.reducer;
