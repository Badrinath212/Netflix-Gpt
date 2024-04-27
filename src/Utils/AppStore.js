import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import moviesPlayingSlice from "./moviesPlayingSlice";

 
 const AppStore=configureStore({
    reducer:{
        user:UserSlice,
        nowMovies:moviesPlayingSlice,
    }
 });

 export default AppStore;