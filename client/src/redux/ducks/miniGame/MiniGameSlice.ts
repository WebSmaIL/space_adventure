import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { fetchUpDateScore } from './asyncThunk';
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
  

    extraReducers: (builder) => {
      builder

          // REGISTER
          .addCase(fetchUpDateScore.pending, (state) => {
              // state.isLoading = true;
          })
          .addCase(fetchUpDateScore.fulfilled, (state, action) => {
            
          })
          .addCase(fetchUpDateScore.rejected, (state, action) => {
              // state.errorMessage = action.payload?.message;
              // state.isLoading = false;
          })

    }
});


export default miniGameSlice.reducer;