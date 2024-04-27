import { useEffect } from "react";
import { API_details, NOW_PLAYING_API } from "../Utils/constants";
import { AddPlayingMovies } from "../Utils/moviesPlayingSlice";
import { useDispatch } from "react-redux";

const useNowPlayingMovies=()=>{
  const dispatch=useDispatch();
  useEffect(()=>{
    const GetNowPlaying=async ()=>{
        const data=await fetch(NOW_PLAYING_API,API_details);
        const json=await data.json();
        dispatch(AddPlayingMovies(json.results));
    };
    GetNowPlaying();
  },[]);
};

export default useNowPlayingMovies;