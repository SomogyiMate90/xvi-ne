
import { getFirestore } from "firebase/firestore";
import getFireBaseApp from "../getFireBaseApp";



let appDb = null;

export default function getFireStoreDB(){

    if(!appDb){
        appDb = getFirestore(getFireBaseApp());
    }

    return appDb;
}