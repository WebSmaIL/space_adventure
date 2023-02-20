import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPlanet } from "./interfaces";

export const fetchPlanets = createAsyncThunk<
    IPlanet[],
    undefined,
    { rejectValue: string }
>(
    'planets/fetchPlanets',
    async () => {
        const res = await fetch('https://websmail.store/api/planets');
        
        return await res.json();
});