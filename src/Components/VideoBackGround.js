import React from 'react'
import {useSelector } from 'react-redux'
import useMovieTrailer from '../Hooks/useMovieTrailer';

const VideoBackGround = ({trailerId}) => {
    const trailer=useSelector(store=>store?.nowMovies?.maintrailer);
    useMovieTrailer(trailerId);
  return (
    <div className='w-screen'>
        <iframe 
        className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/"+trailer?.key+"?autoplay=1&mute=1"}
        title="YouTube video player" 
        allow="autoplay"
        ></iframe>
    </div>
  )
}

export default VideoBackGround;