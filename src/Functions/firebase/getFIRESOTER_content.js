import { collection, getDocs } from "firebase/firestore";
import getFireStoreDB from "./firestore/getFireStoreDB"
import partOfCollections from "./firestore/partOfColletcionList";


export async function getFIRESOTER_content(collectionName=false) {

    /* ÉRDEMES LENNE KIBŐVÍTENI, MERT EZ JÓ LENNE A SIMA FELHASZNÁLÓKNAK, A SZERKESZTÉS
    TEKINTETÉBEN PEDIG A COLLCIÓ NEVÉT ADNÁ ÁT MINDIG ARGOMENTUMKÉNT 

    PL. a shortedCollections LEHETNE SIMÁN LET ÉS IFE FELTÉTELLEL ADNÁM MEG A TARTALMÁT
    */
    
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