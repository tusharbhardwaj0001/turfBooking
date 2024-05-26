import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import { getDatabase } from "firebase/database";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBDCRO_li7D0_iahkdOV3AY4VoRFpTkTVI",
    authDomain: "turf-6a86d.firebaseapp.com",
    projectId: "turf-6a86d",
    storageBucket: "turf-6a86d.appspot.com",
    messagingSenderId: "867461798119",
    appId: "1:867461798119:web:10ef2393cc2ef05a362a42",
    measurementId: "G-8FTET9Y2ZW"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app);
export const db = getFirestore(app)
export const database = getDatabase(app);