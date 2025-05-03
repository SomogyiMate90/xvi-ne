import { doc, setDoc } from "firebase/firestore";
import getFireStoreDB from "./firestore/getFireStoreDB";


export default async function setCurrentDoc(obj,collectionName,docId) {
    const db = getFireStoreDB();
    const docRef = doc(db,collectionName,docId)
    
    try{
        const resp =  await setDoc(docRef,obj, { merge: true })
        return resp;
    }
    catch(e){
        console.error(e);
        return "hiba";
    }
}