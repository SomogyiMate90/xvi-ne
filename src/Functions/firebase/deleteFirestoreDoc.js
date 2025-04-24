import {  doc, deleteDoc } from "firebase/firestore"; 
import getFireStoreDB from "./firestore/getFireStoreDB";


export default async function deleteFirestoreDoc(collectionName, docId) {
    try {
        const db =  getFireStoreDB()
        const docRef = doc(db, collectionName, docId); 
        
        await deleteDoc(docRef);
        console.log(`Dokumentum törölve: ${docId} a(z) ${collectionName} kollekcióból`);
        
        return { success: true, message: "Törlés sikeres a fireStore-ból" };
    } catch (error) {
        console.error("Hiba a törlés során:", error);
        return { success: false, message: error.message };
    }
}