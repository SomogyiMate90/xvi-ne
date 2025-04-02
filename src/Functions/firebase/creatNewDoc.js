import { addDoc, collection } from "firebase/firestore";
import getFireStoreDB from "./getFireStoreDB";

export async function creatNewDoc(obj,collectionName) {
    const db = getFireStoreDB();
    const collectionRef = collection(db,collectionName)
    
    try{
        const resp =  await addDoc(collectionRef,obj)
        return resp;
    }
    catch(e){
        console.error(e);
        return "hiba";
    }
}