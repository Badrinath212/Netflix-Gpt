import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import useUpcommingMovies from '../Hooks/useUpcommingMovies';
import { useSelector } from 'react-redux';
import Gptsearch from './Gptsearch';

const Browse = () => {
  const searchbar=useSelector(store=>store.searchGpt.toggleGPT);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcommingMovies();
  return (
    <div>
        <Header/>
        {searchbar ? <Gptsearch/> :
        <>
           <MainContainer/>
           <SecondaryContainer/>
        </>}
    </div>
  )
}

export default Browse;