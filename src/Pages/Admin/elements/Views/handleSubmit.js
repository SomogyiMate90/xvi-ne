import { creatNewDoc } from "../../../../Functions/firebase/creatNewDoc";
import setCurrentDoc from "../../../../Functions/firebase/setCurrentDoc";
import getNewFormObj from "../../../../Functions/Utils/getNewFormObj";

export default async function submitFunction(event,collectionName) {
       
    
            const docId = document.getElementById('docId').value;
            const hasDocId = docId === "" ? false : true;
            
            console.log(hasDocId)
            let resp;
            let actualDocId;
            
            try{
                const formValues = getNewFormObj(event);
                
                if(!hasDocId){
                    resp = await creatNewDoc(formValues,collectionName);
                    actualDocId = resp;
                }
                else if(hasDocId){
                   
                    resp = await setCurrentDoc(formValues,collectionName,docId);
                    actualDocId = docId;
                }

                if (resp === "hiba") {
                    throw new Error("Szerver hiba történt.");
                }
        
                return actualDocId; 
            } catch (e) {
                console.error("Hiba történt:", e);
                return "Hiba történt"; // Ha hiba történt, egyértelmű választ adunk vissza
            }
        }
        