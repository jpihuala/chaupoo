
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDOiVxYzNUFCO7jGMX2COZKVTsJeL1yjrM",
  authDomain: "chaupoo.firebaseapp.com",
  projectId: "chaupoo",
  storageBucket: "chaupoo.appspot.com",
  messagingSenderId: "753654884202",
  appId: "1:753654884202:web:cb67c54b4b0b16c0a5e713"
};

const app = initializeApp(firebaseConfig);



export default function getFirestoreApp(){
    return app
}
