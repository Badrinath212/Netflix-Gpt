import React, { useEffect } from 'react'
import { LOGO_URL } from '../Utils/constants'
import { auth } from '../Firebase';
import { onAuthStateChanged,signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddUser, RemoveUser } from '../Utils/UserSlice';

const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
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
  return (
    <div className='absolute justify-between flex  w-screen bg-gradient-to-b from-black z-10'>
        <div>
          <img src={LOGO_URL} alt='logo' className='w-[32] h-16 mx-10 my-5'></img>
        </div>
        <div>
          {user && <button className='text-white mr-6 my-8' onClick={()=>HandleSignOut()}>Sign out</button>}
        </div>
    </div>
  )
}

export default Header