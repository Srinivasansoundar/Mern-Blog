// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-b9a4d.firebaseapp.com",
  projectId: "mern-blog-b9a4d",
  storageBucket: "mern-blog-b9a4d.appspot.com",
  messagingSenderId: "8753749095",
  appId: "1:8753749095:web:5d040830a9098b07d008c2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);