import { useState } from "react";
import DefaultInput from "../../../../shared/DefaultInput";
import { useImmer } from "use-immer";
import GetUploadedSections from "../Forms/GetUploadedSections";
import * as form from './formsFileds'
import BtnGroup from "../Forms/BtnGroup";
import DefaultTextArea from "../../../../shared/DefaultTextArea";
import submitFunction from "./handleSubmit";
import getPictureSrcBase64 from "../../../../Functions/Utils/getPictureSrcBase64";
import getEnglishUrl from "../../../../Functions/Utils/getEnglishUrl";
import DefaultInputImg from "../../../../shared/DefaultInputImg";

const Programs = ({ eventModify, collectionName, docs }) => {
  const [formKey, setFormKey] = useState(0); // form elem eldobásához új űrlap esetén
  const { changedEvent, setChangedEvent } = eventModify;  // adat ujra lekérdezése a "Submit" esemény után
  const [inputValues, setInputValues] = useImmer({}); // korábban felöltött elem kiválasztása
  const [pictureBase64Url, setPictureBase64Url] = useState(null); // Átalakított kép src tárolása
  const [englishUrl, setEnglishUrl] = useState(null) // helyes URL elkészítéséhez, hogy ne legyen tele "%" és szám karakterekkel a link

  // adatfelötlés módosítás
    const handleSubmit = async (event) =>{
          event.preventDefault();
          const resp = await submitFunction(event,collectionName)
  
          if(resp === 'Sikeres feltöltés'){
              setChangedEvent(!changedEvent);
              setInputValues({});
              setFormKey(formKey+1);
              setPictureBase64Url(null);
              setEnglishUrl(null);
          }
          else{
              alert('A felötltés során hiba keletkezett, probáld meg ismét')
          }
      }
/**
 * 
 * @param {Event} event 
 * Kép készítés
 */
const getNewPicUrl = async (event) =>{
    const file = event.target.files[0];

    if (!file.type.startsWith('image/')) {
      alert('Képet tölts fel! Ellenőrizd a fájl típusát.');
      return;
    }
    else{
      const compresedPicBase64Url = await getPictureSrcBase64(file);
      
      // console.log(compresedPicBase64Url)
      setPictureBase64Url(compresedPicBase64Url)
    }
   }   
/**
 * 
 * @param {Event} event 
 * Link String készítés
 */
   const handleSetEnglisCharacters = (event) =>{
        const hunTitle = event.target.value;

        const newUrl = getEnglishUrl(hunTitle)
        setEnglishUrl(newUrl)
   }


  return (
    <div className="programs-admin">
      <h2 className="text-center">Tölts ki az adatlapot</h2>
      <DefaultInput defaultValue={inputValues?.docId ?? ""} labelText="Dokumentum azonosító" inputProps={form.docId.docId}/>
      <form  key={formKey} onSubmit={handleSubmit} className="mb-3">
            
        <DefaultInput defaultValue={englishUrl ?? inputValues?.data?.titleUrl ?? ''} labelText='Dinamikus URL' inputProps={form.programsInputs.titleUrl}/>

        <DefaultInput fun={{onChange: (event)=>handleSetEnglisCharacters(event)}}  defaultValue={inputValues?.data?.title ?? ''} labelText='Progam neve' inputProps={form.programsInputs.title}/>

        <DefaultInput defaultValue={inputValues?.data?.address ?? ''} labelText='Helyszín' inputProps={form.programsInputs.address}/>      

        <DefaultTextArea defaultValue={inputValues?.data?.description ?? ''} labelText='Szöveges leírása' inputProps={form.programsInputs.description}/>

        <DefaultInputImg handleFun={getNewPicUrl} />
             
        <DefaultInput defaultValue={pictureBase64Url ?? inputValues?.data?.base64Url} labelText='Átkonvertált kép' inputProps={form.programsInputs.base64Url}/>      

        <div className="d-flex justify-content-evenly">
        <DefaultInput defaultValue={inputValues?.data?.startTime ?? ''} labelText='Program kezdete' inputProps={form.programsInputs.startTime}/>
        <DefaultInput defaultValue={inputValues?.data?.endTime ?? ''} labelText='Program vége' inputProps={form.programsInputs.endTime}/>
        </div>

        <BtnGroup btn={[
                    {text : 'Adatfeltöltés / Módosítása' , type : "submit" , className: "btn btn-success"},
                    {text : 'Új űrlap', inputProps: {onClick : ()=>{setFormKey(formKey+1);setInputValues({});setPictureBase64Url(null);setEnglishUrl(null)}} , className: "btn btn-warning"}
                ]}/>
      </form>
      <hr />
      <GetUploadedSections
        setInputValues={setInputValues}
        eventModify={eventModify}
        collectionName={collectionName}
        docs={docs}
      />
    </div>
  );
};

export default Programs;
