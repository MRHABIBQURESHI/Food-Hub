// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import 'firebase/auth';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-fZWJEr9XNMtYBIpqmJ1BOL2IDqZZHLQ",
  authDomain: "food-database-9fbec.firebaseapp.com",
  databaseURL: "https://food-database-9fbec-default-rtdb.firebaseio.com",
  projectId: "food-database-9fbec",
  storageBucket: "food-database-9fbec.appspot.com",
  messagingSenderId: "82233837477",
  appId: "1:82233837477:web:ec681d9fcca90e0aad0a4c",
  measurementId: "G-7M683PGQC2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);