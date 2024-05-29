import React from 'react'
import { useSelector } from 'react-redux';
import lang from '../Utils/languageconstants';

const VideoTitle = ({title,discription}) => {
  const lan=useSelector(store=>store.config.language);
  return (
    <div className='pt-80 px-12 text-white bg-gradient-to-r from-black w-screen aspect-video absolute bg-opacity-80'>
        <h1 className='md:text-3xl text-2xl font-bold'>{title}</h1>
        <p className='py-3 w-4/12 font-mono my-2 md:inline-block hidden'>{discription}</p>
        <div className='pt-4 md:pt-0'>
            <button className='bg-gray-200 text-black  rounded-sm p-2'>▶ {lang[lan].play}</button>
            <button className='bg-gray-200 text-black  rounded-sm p-2 mx-2'>{lang[lan].moreinfo}</button>
        </div>
    </div>
  )
}

export default VideoTitle;