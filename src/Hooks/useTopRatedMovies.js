import { useEffect } from "react"
import { API_details } from "../Utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { AddTopRated } from "../Utils/moviesPlayingSlice";

const useTopRatedMovies=()=>{
    const dispatch=useDispatch();
    const toprate=useSelector(store=>store.nowMovies.toprated)
    useEffect(()=>{
        const Toprated=async ()=>{
            const data=await fetch("https://api.themoviedb.org/3/movie/top_rated",API_details);
            const json=await data.json();
            dispatch(AddTopRated(json.results));
        };
        !toprate && Toprated();
    },[]);
};
export default useTopRatedMovies;