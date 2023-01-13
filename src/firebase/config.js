// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaJDI9x75-06gpMX90PHGpdqdqoyY4Pzo",
  authDomain: "coffeu-robertino.firebaseapp.com",
  databaseURL: "https://coffeu-robertino-default-rtdb.firebaseio.com",
  projectId: "coffeu-robertino",
  storageBucket: "coffeu-robertino.appspot.com",
  messagingSenderId: "115412491300",
  appId: "1:115412491300:web:a5b149afbc1ad060700cb1",
  measurementId: "G-M7ZB2ZZQCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);