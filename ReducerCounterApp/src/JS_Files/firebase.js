// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNh7hmxQ37rSObMQvad03EwDCfErDdP3U",
  authDomain: "snacks-45e95.firebaseapp.com",
  databaseURL: "https://snacks-45e95-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "snacks-45e95",
  storageBucket: "snacks-45e95.firebasestorage.app",
  messagingSenderId: "1082533124056",
  appId: "1:1082533124056:web:d9d163bee6db10286144ad",
  measurementId: "G-QCZDMM7956"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)