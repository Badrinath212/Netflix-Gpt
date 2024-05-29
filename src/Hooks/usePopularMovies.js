import { useEffect } from "react"
import { API_details } from "../Utils/constants";
import { useDispatch,useSelector } from "react-redux";
import { AddPopularMovies } from "../Utils/moviesPlayingSlice";

const usePopularMovies=()=>{
    const dispatch=useDispatch();
    const popular=useSelector(store=>store.nowMovies.popularmovies);
    useEffect(()=>{
        const popularMovies=async()=>{
            const data=await fetch("https://api.themoviedb.org/3/movie/popular",API_details);
            const json=await data.json();
            dispatch(AddPopularMovies(json.results));
        };
        !popular && popularMovies();
    },[dispatch]);
};

export default usePopularMovies;
