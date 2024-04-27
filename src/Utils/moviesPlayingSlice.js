import { createSlice } from "@reduxjs/toolkit";

const moviesPlayingSlice=createSlice({
    name:"nowPlaing",
    initialState:{
        nowplaying:null,
        maintrailer:null
    },
    reducers:{
        AddPlayingMovies:(state,action)=>{
            state.nowplaying=action.payload;
        },
        AddTrailer:(state,action)=>{
            state.maintrailer=action.payload;
        }
    }
});

export const {AddPlayingMovies,AddTrailer}=moviesPlayingSlice.actions;
export default moviesPlayingSlice.reducer;