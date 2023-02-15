import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const getPlanets = (state: RootState) => state.PlanetsSlice;

export const getPlanetById = (planetId: number) =>
    createSelector(getPlanets, (planets) =>
        planets.list.find((planet: { id: number }) => planet.id === planetId)
    );
