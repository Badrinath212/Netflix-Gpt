import React from 'react'

const VideoTitle = ({title,discription}) => {
  return (
    <div className='pt-80 px-12 text-white bg-gradient-to-r from-black w-screen aspect-video absolute bg-opacity-80'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='py-3 w-4/12 font-mono my-2'>{discription}</p>
        <div>
            <button className='bg-gray-200 text-black w-20 rounded-sm p-2'>▶ Play</button>
            <button className='bg-gray-200 text-black w-28 rounded-sm p-2 mx-2'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;