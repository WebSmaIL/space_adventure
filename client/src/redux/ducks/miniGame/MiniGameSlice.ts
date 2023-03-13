import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IMiniGame } from './interfaces';

const initialState: IMiniGame[] = [
    {
        id: 1,
        src: '../games/fb/index.html',
        isCurrent: false
    }
    
]

const miniGameSlice = createSlice({
    name: 'miniGame',
    initialState,
    reducers: {
      setCurrentGame(state, action: PayloadAction<number>){
        let currentGame = state.find((el)=> el.id === action.payload );
        if (currentGame) currentGame.isCurrent = true;

      }
    },
});


export default miniGameSlice.reducer;