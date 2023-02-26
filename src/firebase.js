import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2lIBWgj3CTMBYOH1vALpoNPUvqrzEFCM",
  authDomain: "netflixweb-f8016.firebaseapp.com",
  projectId: "netflixweb-f8016",
  storageBucket: "netflixweb-f8016.appspot.com",
  messagingSenderId: "418174228298",
  appId: "1:418174228298:web:9c425954f1d10fe195d3b3",
  measurementId: "G-0SC01B2RKS",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
