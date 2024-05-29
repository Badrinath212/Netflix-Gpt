import React from 'react'
import { useSelector } from 'react-redux';
import MoviesList from "./MoviesList";

const GptSearchSuggestions = () => {
  const {movieNames,movieResults}=useSelector(store=>store.searchGpt);
  if(!movieResults) return null;
  return (
    <div className='bg-black opacity-90 p-4 m-4'>
      {movieNames.map((movie,index)=><MoviesList key={movie} title={movie} nowplay={movieResults[index]}/>)}
    </div>
  )
}

export default GptSearchSuggestions;