// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCs9U-NWku4Vq7yGJ6SGGukl0eEZZan-rY",
    authDomain: "food-corner-aee9a.firebaseapp.com",
    projectId: "food-corner-aee9a",
    storageBucket: "food-corner-aee9a.appspot.com",
    messagingSenderId: "81615428406",
    appId: "1:81615428406:web:5d0e45903b3277c793f197"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;