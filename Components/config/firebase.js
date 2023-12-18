// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDBcQp3dLsLAGrt1ks2TfZa2EhijvK9Yh0",
    authDomain: "rough-bfad8.firebaseapp.com",
    projectId: "rough-bfad8",
    storageBucket: "rough-bfad8.appspot.com",
    messagingSenderId: "283399710640",
    appId: "1:283399710640:web:d4e8b04686be8dc4621875",
    measurementId: "G-J6RRJJ5L92",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
