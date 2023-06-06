// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeftV1g4x2YQZ5BkQoh9uoWnKSXfQAD_U",
  authDomain: "d-gallery-9932e.firebaseapp.com",
  projectId: "d-gallery-9932e",
  storageBucket: "d-gallery-9932e.appspot.com",
  messagingSenderId: "601227291570",
  appId: "1:601227291570:web:c94208005a890c1eb7d2ab",
  measurementId: "G-JCLKCTJHTQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);