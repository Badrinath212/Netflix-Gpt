import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { API_details } from "../Utils/constants";
import { AddTrailer } from "../Utils/moviesPlayingSlice";

const useMovieTrailer=(trailerId)=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        const mainMovieData=async ()=>{
            const data=await fetch('https://api.themoviedb.org/3/movie/'+trailerId+'/videos?language=en-US', API_details);
            const json=await data.json();
            console.log(json.results);
            const filteredData=json?.results?.filter((video)=>video.type==="Trailer");
            if(filteredData.length===0){
                dispatch(AddTrailer(json?.results[0]));
            } else{
                dispatch(AddTrailer(filteredData[0]));
            }
        };
        mainMovieData();
    },[trailerId]);

};
export default useMovieTrailer;