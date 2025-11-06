// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore as getFirebase } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg_OSmPo5TzZSsmiMvP0IcIRf5przz7yM",
  authDomain: "authentication-f6eaf.firebaseapp.com",
  projectId: "authentication-f6eaf",
  storageBucket: "authentication-f6eaf.firebasestorage.app",
  messagingSenderId: "197681612025",
  appId: "1:197681612025:web:ce19cc3b1d2a03efe84e28",
  measurementId: "G-6DEWBFG7XV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)

export const auth =getAuth(app)

export const db = getFirebase(app)