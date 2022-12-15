import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import {getDatabase} from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyB_jgJ6vWc_xOFkKew2JCr4MnNYAqEp8L8",
    authDomain: "argon-system-366911.firebaseapp.com",
    projectId: "argon-system-366911",
    storageBucket: "argon-system-366911.appspot.com",
    messagingSenderId: "907899461593",
    appId: "1:907899461593:web:1dcebf247dbd4c01d203c8",
    measurementId: "G-6K63WRZZ56",
    databaseURL: "https://argon-system-366911-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);
export const confirmation = getAuth(app);
export const db = getDatabase(app);