// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaHconDWz5VAtU5_PONUOq4q1lhVeLnGI",
  authDomain: "collaborativeboard-8c684.firebaseapp.com",
  projectId: "collaborativeboard-8c684",
  storageBucket: "collaborativeboard-8c684.firebasestorage.app",
  messagingSenderId: "807738962160",
  appId: "1:807738962160:web:6904f0108e6a3264e5d235",
  measurementId: "G-4C83C150RW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);