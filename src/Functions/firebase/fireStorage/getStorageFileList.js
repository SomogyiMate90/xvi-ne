import { ref, listAll } from "firebase/storage";
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
        const name = result.items.map((itemRef) => itemRef.name);
        const fullPath = result.items.map((itemRef) => itemRef.fullPath);

        return { fullPath, name };
    } catch (error) {
        console.error("Error fetching file list from Firebase Storage:", error);
        return 'Nem sikerült a fájlok listáját lekérdezni!';
    }

};

export default getStorageFileList;