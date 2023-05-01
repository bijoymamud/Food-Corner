// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMguOLcOybfSt-L3xIvOcyAkWkmuoTA5U",
    authDomain: "food-receipt-9fd57.firebaseapp.com",
    projectId: "food-receipt-9fd57",
    storageBucket: "food-receipt-9fd57.appspot.com",
    messagingSenderId: "326544587681",
    appId: "1:326544587681:web:2d93ecd7aae61a38a5e9e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;