import { doc, setDoc } from "firebase/firestore";
import getFireStoreDB from "./getFireStoreDB";

export default async function setCurrentDoc(obj,collectionName,docId) {
    const db = getFireStoreDB();
    console.log("modosítás")
    const docRef = doc(db,collectionName,docId)
    console.log(docRef)
    
    try{
        const resp =  await setDoc(docRef,obj)
        console.log(resp)
        return resp;
    }
    catch(e){
        console.error(e);
        return "hiba";
    }
}