// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIBn2Prs9g8AtABQbiYt_hJ74eC2pGezk",
  authDomain: "dosis-ped.firebaseapp.com",
  projectId: "dosis-ped",
  storageBucket: "dosis-ped.appspot.com",
  messagingSenderId: "798909513274",
  appId: "1:798909513274:web:d6641db339f8b33e743f03",
  measurementId: "G-RCRZG17QWX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);