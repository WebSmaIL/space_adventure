import { RootState } from "../../store";
import { createSelector } from '@reduxjs/toolkit';

export const getMiniGames = (state: RootState) => state.MiniGameSlice;

export const getMiniGameById = (miniGameId: number) =>
    createSelector(getMiniGames, (miniGames) =>
        miniGames.find((game: { id: number }) => game.id === miniGameId)
    );
