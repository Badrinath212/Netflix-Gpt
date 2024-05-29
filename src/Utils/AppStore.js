import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import moviesPlayingSlice from "./moviesPlayingSlice";
import searchGptReducer from "./SearchGptSlice";
import configReducer from "./configueSlice";
 
 const AppStore=configureStore({
    reducer:{
        user:UserSlice,
        nowMovies:moviesPlayingSlice,
        searchGpt:searchGptReducer,
        config:configReducer,
    }
 });

 export default AppStore;