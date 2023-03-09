import { createSlice } from '@reduxjs/toolkit';
import { IMiniGame } from './interfaces';

const initialState: IMiniGame[] = [
    {
        id: 0,
        src: ''
    },

    {
        id: 0,
        src: ''
    },

    {
        id: 0,
        src: ''
    }
    
]
     

const miniGameSlice = createSlice({
    name: 'miniGame',
    initialState,
    reducers: {
      
    },
});


export default miniGameSlice.reducer;