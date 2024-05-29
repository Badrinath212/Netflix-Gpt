import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import lang from '../Utils/languageconstants';
import openai from '../Utils/openAi';
import { API_details } from '../Utils/constants';
import { AddGptMovies } from '../Utils/SearchGptSlice';

const GptSearchBar = () => {
  const [ErrorMessege,setErrorMessege]=useState(null);
  const langKey=useSelector(store=>store.config.language);
  const dispatch=useDispatch();
  const searchText=useRef("");
  const moviedata=async (movie)=>{
    const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=true&page=1",API_details);
    const json=await data.json();
    return json.results;
  };
  const Handleclick=async ()=>{
    const SearchQuery="Act as a movie recommendation system and suggest movies for this queury:"
                   +searchText.current.value+
                  ".only give top five movies.give the result like this example.Example results: Pushpa, Animal, KGF, Radhya Shyam, Bahubali and do not give the numbering for the movies";
    const AI_data= await openai.chat.completions.create({
      messages: [{ role: 'user', content: SearchQuery}],
      model: 'gpt-3.5-turbo',
    });
    const Ai_movie_list=AI_data?.choices[0]?.message?.content.split(", ");
    if(!Ai_movie_list){
      setErrorMessege("I can't able to understand your query.Give me in a better way");
    };
    const promisearray=Ai_movie_list.map((movie)=>moviedata(movie));
    const tmdbresults=await Promise.all(promisearray);
    dispatch(AddGptMovies({MovieResults: tmdbresults,MovieNames: Ai_movie_list}));
  };
  return (
    <div className='pt-[40%] md:pt-[10%] flex justify-center'>
        <form className=' bg-black md:w-1/2 grid grid-cols-12 w-screen mx-3 md:mx-0' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} type='text' className='p-4 m-4 col-span-9 rounded-md' placeholder={lang[langKey].GptplaceHolderText}/>
            <button 
            onClick={()=>Handleclick()} className='px-4 py-1 bg-red-500 m-4 rounded col-span-3'>{lang[langKey].search}</button>
            {ErrorMessege!=null && <p>{ErrorMessege}</p>}
        </form>
    </div>
  )
}

export default GptSearchBar;