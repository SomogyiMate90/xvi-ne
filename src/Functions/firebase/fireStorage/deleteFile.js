import { ref, deleteObject } from "firebase/storage";
import getFireStorageDB from "./getFireStorageDB";

const deleteFile = async (pathName) => {
    try {
        const storageDb = getFireStorageDB();
        const fileRef = ref(storageDb, pathName);

        await deleteObject(fileRef);
        // console.log(`File at ${pathName} deleted successfully.`);
    } catch (error) {
        console.error("Error deleting file:", error);
    }
};

export default deleteFile;