import React, { useEffect } from 'react'
import { DEFAULTLANG_CONSTS, LOGO_URL, NETFLIX_ICON } from '../Utils/constants'
import { auth } from '../Firebase';
import { onAuthStateChanged,signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddUser, RemoveUser } from '../Utils/UserSlice';
import { ClearMovies, ToggleSearchGpt } from '../Utils/SearchGptSlice';
import { changeLanguage } from '../Utils/configueSlice';
import lang from '../Utils/languageconstants';

const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const search=useSelector(store=>store.searchGpt.toggleGPT);
  const lan=useSelector(store=>store.config.language);
  const Hanglechange=(e)=>{
    dispatch(changeLanguage(e.target.value));
  }
  const HandleGPTSearch=()=>{
    dispatch(ToggleSearchGpt(!search));
  };
  const HandleSignOut=(()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  })
  const user=useSelector(store=>store.user);
  useEffect(()=>{
  const unSubscribe=onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const {uid,email,password,displayName,photoURL}= user;
      dispatch(AddUser({uid:uid,email:email,password:password,displayName:displayName,photoURL:photoURL}));
      navigate("/browse")
    } else {
      // User is signed out
      // ...
      dispatch(RemoveUser());
      navigate("/")
    }
  })
  return ()=>unSubscribe();},[]);
  if(!search){
    dispatch(ClearMovies());
  };
  return (
    <div className='absolute md:justify-between flex md:flex-row flex-col w-screen bg-gradient-to-b from-black z-10 md:bg-blue-400 sm:bg-neutral-950 justify-center'>
        <div>
          <img src={LOGO_URL} alt='logo' className='w-[32] h-16 md:mx-10 mx-auto my-5'></img>
        </div>
        {user && <div className='flex md:mt-0 -mt-10'>
          <select className='bg-gray-200 p-auto h-9 md:w-24 rounded-md mt-6' onChange={Hanglechange}>
            {DEFAULTLANG_CONSTS.map((l)=><option key={l.identifier} value={l.identifier}>{l.name}</option>)}
          </select>
          <button className=' bg-purple-600 w-28 md:m-4 h-10 text-center p-auto rounded-lg md:mt-[22px] ml-52 mt-6'
            onClick={()=>HandleGPTSearch()}>{search ? lang[lan].home:lang[lan].gptsearch}</button>
          <img className='w-16 h-16 pt-4 md:block hidden' alt='user' src={NETFLIX_ICON}/>
          <button className='text-white p-5 mb-3' onClick={()=>HandleSignOut()}>(Sign out)</button>
        </div>}
    </div>
  )
}

export default Header