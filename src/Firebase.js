// firebase.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDxLkEAkgQNRWDfJEkdrP37tVV0urPCgL8",
    authDomain: "login-singup---project.firebaseapp.com",
    projectId: "login-singup---project",
    storageBucket: "login-singup---project.firebasestorage.app",
    messagingSenderId: "189547270544",
    appId: "1:189547270544:web:f93ee94822738d22d56315"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
