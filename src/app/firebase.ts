// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { Auth, createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBBxjxlkny8DVsVW-UwvrrktwRDKmHGNLE',
  authDomain: 'showfinnmore.firebaseapp.com',
  projectId: 'showfinnmore',
  storageBucket: 'showfinnmore.appspot.com',
  messagingSenderId: '110387703084',
  appId: '1:110387703084:web:8d4992c3264b68faa75089',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth: Auth = getAuth(app);
