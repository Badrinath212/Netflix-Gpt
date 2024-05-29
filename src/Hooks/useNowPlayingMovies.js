import { useEffect } from "react";
import { API_details, NOW_PLAYING_API } from "../Utils/constants";
import { AddPlayingMovies } from "../Utils/moviesPlayingSlice";
import { useDispatch, useSelector } from "react-redux";

const useNowPlayingMovies=()=>{
  const dispatch=useDispatch();
  const nowpalying=useSelector(store=>store.nowMovies.nowpalying);
  useEffect(()=>{
    const GetNowPlaying=async ()=>{
        const data=await fetch(NOW_PLAYING_API,API_details);
        const json=await data.json();
        dispatch(AddPlayingMovies(json.results));
    };
    !nowpalying && GetNowPlaying();
  },[]);
};

export default useNowPlayingMovies;