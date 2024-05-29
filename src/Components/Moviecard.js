import React from 'react'
import { TMDB_CDN_URL } from '../Utils/constants';

const Moviecard = ({poster}) => {
  if(!poster) return null;
  return (
    <div>
        <div className='w-48 p-2' >
            <img alt='poster'
                src={TMDB_CDN_URL+poster}/>
        </div>
    </div>
  )
}

export default Moviecard;