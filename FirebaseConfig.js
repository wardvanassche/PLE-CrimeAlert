// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGTvu2q-VtSc_TJYgAeIbgou06-nQHUc8",
    authDomain: "ple-crimealert-f13f5.firebaseapp.com",
    projectId: "ple-crimealert-f13f5",
    storageBucket: "ple-crimealert-f13f5.firebasestorage.app",
    messagingSenderId: "463343177455",
    appId: "1:463343177455:web:edb2ee6c919a144d78151a",
    measurementId: "G-0WQ26K76YZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}