import { initializeApp } from "firebase/app";
import firebaseConfig from "./config/appConfig";



let firBaseApp = null;


export default function getFireBaseApp(){

    if(!firBaseApp){
        firBaseApp = initializeApp(firebaseConfig)
    }


    return firBaseApp;
}