import { collection, getDocs } from "firebase/firestore";
import getFireStoreDB from "./firestore/getFireStoreDB"
import partOfCollections from "./firestore/partOfColletcionList";


export async function getFIRESOTER_content(collectionName=false) {
    
    const db = getFireStoreDB();

    let content = {};

    let shortedCollections;

    if(!collectionName){
        shortedCollections = partOfCollections;
    }
    else{
        shortedCollections = [collectionName]
    }


    for(let i = 0; i < shortedCollections.length; i++){
        const collectionName = shortedCollections[i];

        const colRef = collection(db,`${shortedCollections[i]}`);
        const docsSnapShot = await getDocs(colRef);

        const datas = docsSnapShot.docs.map(doc=>{

            const docId = doc.id;
            const data = doc.data()

            return {docId , data}
        })

        content[collectionName] = datas;
    }
    

    return content
}