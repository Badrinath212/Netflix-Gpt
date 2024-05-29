import { createSlice } from "@reduxjs/toolkit";

const SearchGptSlice=createSlice({
    name:"searchGPT",
    initialState:{
        toggleGPT:false,
        movieNames:null,
        movieResults:null,
    },
    reducers:{
        ToggleSearchGpt:(state)=>{
            state.toggleGPT=!state.toggleGPT;
        },
        AddGptMovies:(state,action)=>{
            const {MovieResults,MovieNames}=action.payload;
            state.movieResults=MovieResults;
            state.movieNames=MovieNames;
        },
        ClearMovies:(state)=>{
            state.movieNames=null;
            state.movieResults=null;
        }
    }
});

export const {ToggleSearchGpt,AddGptMovies,ClearMovies}=SearchGptSlice.actions;
export default SearchGptSlice.reducer;