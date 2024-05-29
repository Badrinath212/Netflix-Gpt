import React from 'react'
import Moviecard from './Moviecard';

const MoviesList = ({title,nowplay}) => {
  return (
    <div className='P-6'>
        <h1 className='text-2xl font-bold p-2 text-white'>{title}</h1>
        <div className='flex P-2 overflow-x-scroll'>
            {nowplay.map((movie)=><Moviecard key={movie.id} poster={movie.poster_path}/>)}
        </div>
    </div>
  )
}

export default MoviesList;