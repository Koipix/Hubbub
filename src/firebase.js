import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgrFxB9fxsqm0SCdzI0krAcqbZ1f6YPd8",
  authDomain: "hubbub-b5bdc.firebaseapp.com",
  projectId: "hubbub-b5bdc",
  storageBucket: "hubbub-b5bdc.appspot.com",
  messagingSenderId: "1052834904275",
  appId: "1:1052834904275:web:5806208c590e2f377f7c26"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();