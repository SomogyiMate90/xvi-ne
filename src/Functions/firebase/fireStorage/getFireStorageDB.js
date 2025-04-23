import getFireBaseApp from "../getFireBaseApp";
import { getStorage } from "firebase/storage";

let storageDB = null;

export default function getFireStorageDB(){

    if(!storageDB){
        storageDB =  getStorage(getFireBaseApp())
    }

    return storageDB;
}