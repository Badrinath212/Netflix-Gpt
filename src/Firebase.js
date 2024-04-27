// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEa5mDg41eom76Qz2HS17o04xTA86upkg",
  authDomain: "netfflix-gpt.firebaseapp.com",
  projectId: "netfflix-gpt",
  storageBucket: "netfflix-gpt.appspot.com",
  messagingSenderId: "64357380462",
  appId: "1:64357380462:web:904b00dd4f30476461d17f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();