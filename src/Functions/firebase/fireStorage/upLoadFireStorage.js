import { ref, uploadBytes } from "firebase/storage"
import getFireStorageDB from "./getFireStorageDB"

/**
 * 
 * @param {FileList} files 
 */
    
   export default async function upLoadFireStorage(files, floderWdocId) {
      const db = getFireStorageDB();
   
      for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const fileRef = ref(db, `${floderWdocId}/${file.name}`);
   
          try {
              await uploadBytes(fileRef, file);
          } catch (e) {
              console.error('Hiba történt:', e);
              return 'Hiba';
          }
      }
   
      return 'Kész';
   }