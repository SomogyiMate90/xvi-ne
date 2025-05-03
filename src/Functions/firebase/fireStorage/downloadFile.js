import {  ref, getDownloadURL } from "firebase/storage";
import getFireStorageDB from "./getFireStorageDB";

const downloadFile = async (pathName) => {
    try {
        const storageDb = getFireStorageDB();
        const fileRef = ref(storageDb, pathName);
        const url = await getDownloadURL(fileRef);
        console.log(url)
        return url; // This URL can be used to download the file
    } catch (error) {
        console.error("Error downloading file:", error);
        throw error;
    }
};

export default downloadFile;