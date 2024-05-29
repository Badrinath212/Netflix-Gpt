import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptSearchSuggestions from './GptSearchSuggestions';
import { BG_URL } from '../Utils/constants';

const Gptsearch = () => {
  return (
    <div>
      <div className='fixed -z-10'>
        <img className='h-screen md:h-full object-cover' alt='back' src={BG_URL}/>
      </div>
        <GptSearchBar/>
        <GptSearchSuggestions/>
    </div>
  )
}

export default Gptsearch;