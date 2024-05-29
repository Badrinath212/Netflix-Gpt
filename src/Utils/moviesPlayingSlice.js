import { createSlice } from "@reduxjs/toolkit";

const moviesPlayingSlice=createSlice({
    name:"nowPlaing",
    initialState:{
        nowplaying:null,
        maintrailer:null,
        popularmovies:null,
        toprated:null,
        upcomming:null,
    },
    reducers:{
        AddPlayingMovies:(state,action)=>{
            state.nowplaying=action.payload;
        },
        AddTrailer:(state,action)=>{
            state.maintrailer=action.payload;
        },
        AddPopularMovies:(state,action)=>{
            state.popularmovies=action.payload;
        },
        AddTopRated:(state,action)=>{
            state.toprated=action.payload;
        },
        AddUpcommingMovies:(state,action)=>{
            state.upcomming=action.payload;
        },
    }
});

export const {AddPlayingMovies,AddTrailer,AddPopularMovies,AddTopRated,AddUpcommingMovies}=moviesPlayingSlice.actions;
export default moviesPlayingSlice.reducer;