// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOiVxYzNUFCO7jGMX2COZKVTsJeL1yjrM",
  authDomain: "chaupoo.firebaseapp.com",
  projectId: "chaupoo",
  storageBucket: "chaupoo.appspot.com",
  messagingSenderId: "753654884202",
  appId: "1:753654884202:web:cb67c54b4b0b16c0a5e713"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { initializeApp } from "firebase/app";

export default function getFirestoreApp(){
    return app
}
