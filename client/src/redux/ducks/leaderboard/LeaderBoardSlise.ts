import { createSlice } from '@reduxjs/toolkit';
import { fetchLeaders } from './asyncThunk';
import { ILeaderBoard } from './interfaces';

let initialState: ILeaderBoard[] = []

const leaderBoardSlice = createSlice({
    name: 'leaderBoard',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
  
            .addCase(fetchLeaders.pending, (state) => {
                console.log('start')
            })
            .addCase(fetchLeaders.fulfilled, (state, action) => {
                console.log('payload-', action.payload)
                state = [...action.payload]
                console.log('state-', state)
            })
            .addCase(fetchLeaders.rejected, (state, action) => {
                console.log('error')
            })
  
      }
});

export default leaderBoardSlice.reducer;