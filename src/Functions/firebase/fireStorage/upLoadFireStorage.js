import { ref, uploadBytes } from "firebase/storage"
import getFireStorageDB from "./getFireStorageDB"

/**
 * 
 * @param {FileList} files 
 */
export default async function upLoadFireStorage(files,floderWdocId) {
    
   console.log(files)
   console.log(files.length)
   const db = getFireStorageDB();

   let finish = false;
   let respText

   for(let i = 0; i< files.length-1; i++){

    if(finish) return;

       const fileRef = ref(db,`${floderWdocId}/${files[i].name}`)

    try{
       await uploadBytes(fileRef,files[i])

    }
    catch(e){
        console.error(e);
        finish = true
        respText = 'Hiba'
    }

    if(i === (files.length-1)) finish = true
   }

   if(finish){
    return respText;
   }

}