//inicializacion de firebase y firestore
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3qZ_90bCS1iI7o4ypxJbstn-HY5rgYSE",
  authDomain: "proyecto-react-5e31f.firebaseapp.com",
  projectId: "proyecto-react-5e31f",
  storageBucket: "proyecto-react-5e31f.firebasestorage.app",
  messagingSenderId: "22979395102",
  appId: "1:22979395102:web:3743a75b388c968c43f80f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);