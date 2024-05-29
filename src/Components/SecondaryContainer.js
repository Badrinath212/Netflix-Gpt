import React from 'react'
import MoviesList from './MoviesList';
import { useSelector } from 'react-redux';
import lang from '../Utils/languageconstants';

const SecondaryContainer = () => {
  const lan=useSelector(store=>store.config.language);
  const movies=useSelector(store=>store.nowMovies.nowplaying);
  const popular=useSelector(store=>store.nowMovies.popularmovies);
  const toprate=useSelector(store=>store.nowMovies.toprated);
  const upcomming=useSelector(store=>store.nowMovies.upcomming);
  return (
    <div className='bg-black p-8'>
      <div className='md:-mt-80 mt-10 relative z-20'>
        {movies && <MoviesList title={lang[lan].nowplaying} nowplay={movies}/>}
      </div>
      {toprate && <MoviesList title={lang[lan].toprated} nowplay={toprate}/>}
      {upcomming && <MoviesList title={lang[lan].upcomming} nowplay={upcomming}/>}
      {popular && <MoviesList title={lang[lan].popular} nowplay={popular}/>}
    </div>
  )
}

export default SecondaryContainer;