// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
 
// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyDAH3icry2YsF6yrln7u65C9MCkye068qI",
  
    authDomain: "cprg306-assignments-6615b.firebaseapp.com",
  
    projectId: "cprg306-assignments-6615b",
  
    storageBucket: "cprg306-assignments-6615b.firebasestorage.app",
  
    messagingSenderId: "366646368834",
  
    appId: "1:366646368834:web:7071686c4fdcfaf4cdabdb"
  
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);