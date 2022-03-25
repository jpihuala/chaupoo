
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyB0uVc9QXoBtsDwplTsFCDdS2XYZklXrCA",
  authDomain: "comision25460.firebaseapp.com",
  projectId: "comision25460",
  storageBucket: "comision25460.appspot.com",
  messagingSenderId: "261578257883",
  appId: "1:261578257883:web:4a2b02e5f190fa4dc2a3fe"
};


const app = initializeApp(firebaseConfig)

export default function getFirestoreApp(){
    return app
}
