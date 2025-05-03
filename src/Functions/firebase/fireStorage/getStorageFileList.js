import { ref, listAll, getMetadata } from "firebase/storage";
import getFireStorageDB from "./getFireStorageDB";


/**
 * Fetches the list of files from a specified Firebase Storage folder.
 * @param {string} folderPath - The path of the folder in Firebase Storage.
 * @returns {Promise<string[]>} - A promise that resolves to an array of file paths.
 */
const getStorageFileList = async (folderPath) => {

    try {
        const storageDb = getFireStorageDB();
        const folderRef = ref(storageDb, folderPath);

        const result = await listAll(folderRef);
        const files = await Promise.all(
            result.items.map(async (itemRef) => {
              const fileMeta = await getMetadata(itemRef);
              return {
                name: itemRef.name,
                fullPath: itemRef.fullPath,
                contentType: fileMeta.contentType,
              };
            })
          );
      
          return files; 
    } catch (error) {
        console.error("Nem sikerült a fájlok listáját lekérdezni:", error);
        return 'Nem sikerült a fájlok listáját lekérdezni!';
    }

};

export default getStorageFileList;