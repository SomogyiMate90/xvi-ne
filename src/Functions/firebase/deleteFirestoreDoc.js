import { getFirestore, doc, deleteDoc } from "firebase/firestore"; 
import getFireBaseApp from "./getFireBaseApp";

export default async function deleteFirestoreDoc(collectionName, docId) {
    try {
        const db = getFirestore(getFireBaseApp()); // Firestore inicializálása
        const docRef = doc(db, collectionName, docId); // Dokumentum referencia létrehozása
        
        await deleteDoc(docRef); // Dokumentum törlése
        console.log(`Dokumentum törölve: ${docId} a(z) ${collectionName} kollekcióból`);
        
        return { success: true, message: "Törlés sikeres" };
    } catch (error) {
        console.error("Hiba a törlés során:", error);
        return { success: false, message: error.message };
    }
}