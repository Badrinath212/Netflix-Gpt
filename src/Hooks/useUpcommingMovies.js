import { useEffect } from "react"
import { API_details } from "../Utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { AddUpcommingMovies } from "../Utils/moviesPlayingSlice";

const useUpcommingMovies=()=>{
    const dispatch=useDispatch();
    const upcome=useSelector(store=>store.nowMovies.upcomming);
    useEffect(()=>{
        const UpcommingMovies=async ()=>{
            const data=await fetch("https://api.themoviedb.org/3/movie/upcoming",API_details);
            const json= await data.json();
            dispatch(AddUpcommingMovies(json.results));
        };
        !upcome && UpcommingMovies();
    },[]);
};

export default useUpcommingMovies;