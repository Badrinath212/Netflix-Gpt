import React, { useRef, useState } from 'react';
import Header from './Header';
import { BG_URL } from '../Utils/constants';
import formValidate from '../Utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from 'firebase/auth';
import { auth } from '../Firebase';
import { useDispatch } from 'react-redux';
import { AddUser } from '../Utils/UserSlice';

const Login = () => {
    const dispatch=useDispatch();
    const [isSignIn, setisSignIn]=useState(true);
    const [ErrorMessege,setErrorMessege]=useState();
    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);
    const HandleSignIn=()=>{
        return setisSignIn(!isSignIn);
    };
    const CheckForm=()=>{
        const messege=formValidate(email.current.value,password.current.value);
        setErrorMessege(messege);
        if(messege==null){
            if(!isSignIn){
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                      }).then(() => {
                        const {uid,displayName,email,password}=auth.currentUser;
                        dispatch(AddUser({uid:uid,email:email,password:password,displayName:displayName}))
                      }).catch((error) => {
                        // An error occurred
                        // ...
                      });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessege(errorCode+" "+errorMessage);
                });
            } else{
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;            
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessege(errorCode+" "+errorMessage)
                });
            }
        }
    };
  return (
    <div>
        <div className='absolute w-screen'>
            <Header/>
            <img src={BG_URL} alt='Bg-img'/>
        </div>
        <div className='absolute bg-black text-white w-3/12 bg-opacity-70 mx-auto left-0 right-0 mt-40'>
            <form className='p-4' onSubmit={(e)=>e.preventDefault()}>
                <h1 className='font-bold text-3xl m-2 ml-9 mb-6'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignIn && <input className='w-[300px] h-[50px] p-2 my-2 ml-9 border border-slate-300 rounded-sm bg-inherit' 
                                    ref={name}
                                    type='text' 
                                    placeholder='Full Name'/>}
                <input 
                        className='w-[300px] h-[50px] p-2 my-2 ml-9  border border-slate-300 rounded-sm bg-inherit' 
                        type='text' 
                        placeholder='Email'
                        ref={email}/>
                <input 
                    className='w-[300px] h-[50px] p-2 my-2 ml-9  border border-white rounded-sm bg-inherit' 
                    type='password' 
                    placeholder='Password'
                    ref={password}/>
                {ErrorMessege && <p className='text-red-600 ml-9'>{ErrorMessege}</p>}
                <button className='w-[300px] p-2 my-2  ml-9 bg-red-600 h-[50px] rounded-sm text-xl'
                onClick={()=>CheckForm()}>{isSignIn ? "Sign In" : "Sign Up"}</button>
                <p className='p-2 my-2 ml-9 cursor-pointer' onClick={()=>HandleSignIn()}>New to Netflix? Sign up now.</p>
            </form>
        </div>
    </div>
  )
}

export default Login;