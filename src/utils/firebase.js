// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_bEwlx08ny3FLADuzAoiv8iL5KjNQq5o",
  authDomain: "netflixgpt-b0799.firebaseapp.com",
  projectId: "netflixgpt-b0799",
  storageBucket: "netflixgpt-b0799.firebasestorage.app",
  messagingSenderId: "279951857445",
  appId: "1:279951857445:web:f43f8de6d8d8d51a6baccc",
  measurementId: "G-8K6YSXGZS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();