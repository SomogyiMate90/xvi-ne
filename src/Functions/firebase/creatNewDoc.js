import { addDoc, collection } from "firebase/firestore";
import getFireStoreDB from "./firestore/getFireStoreDB";


export async function creatNewDoc(obj,collectionName) {
    const db = getFireStoreDB();
    const collectionRef = collection(db,collectionName)
    
    try{
        const resp =  await addDoc(collectionRef,obj)
        const newDocId = resp.id;
        console.log(newDocId)
        return newDocId;
    }
    catch(e){
        console.error(e);
        return "hiba";
    }
}