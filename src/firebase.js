import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeHeWL93E4EaD757MaCT3gjhunhgseEHw",
  authDomain: "hubbub-1d3ee.firebaseapp.com",
  projectId: "hubbub-1d3ee",
  storageBucket: "hubbub-1d3ee.appspot.com",
  messagingSenderId: "799008486646",
  appId: "1:799008486646:web:5ea49c81040a03f900a8d7"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();