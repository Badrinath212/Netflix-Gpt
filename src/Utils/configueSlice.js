import { createSlice } from "@reduxjs/toolkit";

const configurSlice=createSlice({
    name:"config",
    initialState:{
        language:"english",
    },
    reducers:{
        changeLanguage:(state,action)=>{
            state.language=action.payload;
        }
    }
});

export const {changeLanguage}=configurSlice.actions;
export default configurSlice.reducer;