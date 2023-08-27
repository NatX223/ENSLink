// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5t_vSY-uavQXG5z--1I_oe7lqarwFbUk",
  authDomain: "enslinktree.firebaseapp.com",
  projectId: "enslinktree",
  storageBucket: "enslinktree.appspot.com",
  messagingSenderId: "112023424235",
  appId: "1:112023424235:web:5edca10fd0329a0fe942ae",
  measurementId: "G-E23532J22R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Firestore
const db = getFirestore(app);

export { db };