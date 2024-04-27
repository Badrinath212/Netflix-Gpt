import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackGround from './VideoBackGround';

const MainContainer = () => {
    const movies=useSelector(store=>store?.nowMovies?.nowplaying);
    if(movies==null) return;
    const mainMovie=movies[0];
    const {original_title,overview,id}=mainMovie;
  return (
    <div className=' text-white w-screen'>
        <VideoTitle title={original_title} discription={overview}/>
        <VideoBackGround trailerId={id}/>
    </div>
  )
}

export default MainContainer;