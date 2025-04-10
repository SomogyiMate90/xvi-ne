import { useState } from "react";
import { useImmer } from "use-immer";
import submitFunction from "./handleSubmit";
import * as formField from './formsFileds.js';
import getEnglishUrl from "../../../../Functions/Utils/getEnglishUrl.js";
import DefaultInput from "../../../../shared/DefaultInput.jsx";
import getPictureSrcBase64 from "../../../../Functions/Utils/getPictureSrcBase64.js";
import GetUploadedSections from "../Forms/GetUploadedSections.jsx";
import DefaultInputImg from "../../../../shared/DefaultInputImg.jsx";
import DefaultTextArea from "../../../../shared/DefaultTextArea.jsx";
import BtnGroup from "../Forms/BtnGroup.jsx";


const FormView = ({ eventModify, collectionName, docs }) => {
  const [formKey, setFormKey] = useState(0); // form elem eldobásához új űrlap esetén
  const { changedEvent, setChangedEvent } = eventModify; // adat ujra lekérdezése a "Submit" esemény után
  const [defaultValues, setDefaultValues] = useImmer({}); // korábban felöltött elem kiválasztása
  const [pictureBase64Url, setPictureBase64Url] = useState(null); // Átalakított kép src tárolása
  const [englishUrl, setEnglishUrl] = useState(null); // helyes URL elkészítéséhez, hogy ne legyen tele "%" és szám karakterekkel a link

 const {docId , data} = defaultValues;

  /**
   * @type {Object}
   */
  const formFields = formField[collectionName];
  const formFieldsElemets = Object.keys(formFields)

  // adatfelötlés módosítás
  const handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await submitFunction(event, collectionName);

    if (resp === "Sikeres feltöltés") {
      
      setChangedEvent(!changedEvent);
      setDefaultValues({});
      setFormKey(formKey + 1);
      setPictureBase64Url(null);
      setEnglishUrl(null);

    } else {
      alert("A felötltés során hiba keletkezett, probáld meg ismét");
    }
  };


  /**
   *
   * @param {Event} event
   * Kép készítés
   */
  const getNewPicUrl = async (event) => {
    const file = event.target.files[0];

    if (!file.type.startsWith("image/")) {
      alert("Képet tölts fel! Ellenőrizd a fájl típusát.");
      return;
    } else {
      const compresedPicBase64Url = await getPictureSrcBase64(file,600);

      // console.log(compresedPicBase64Url)
      setPictureBase64Url(compresedPicBase64Url);
    }
  };
  /**
   *
   * @param {Event} event
   * Link String készítés
   */
  const handleSetEnglisCharacters = (event) => {
    const hunTitle = event.target.value;

    const newUrl = getEnglishUrl(hunTitle);
    setEnglishUrl(newUrl);
  };

  const handleNewForm = ()=>{

    setFormKey(formKey+1);
    setDefaultValues({});
    setPictureBase64Url(null);setEnglishUrl(null);    
}


  return (
    <div className="form-view-admin">
      <h3 className="text-center">Tölts ki az adatlapot</h3>
      <DefaultInput key={formField.docId.docId ?? "ABC"} defaultValue={docId ?? ""} givenLabelText="Dokumentum azonosító" inputProps={formField.docId.docId}/>
      <form key={formKey} onSubmit={handleSubmit} className="mb-3">
      <DefaultInput defaultValue={englishUrl ?? data?.titleUrl ?? ''} givenLabelText='Dinamikus URL' inputProps={formField.dinamicUrl.titleUrl}/>
        {
            formFieldsElemets.map((item,index)=>{
                
                if(item === 'title') return <DefaultInput defaultValue={data?.title ?? ''} 
                                                        key={index} 
                                                        fun={{onChange: (event)=>handleSetEnglisCharacters(event)}} 
                                                        inputProps={formFields[item]}/>
                if(item === 'base64Url') return (<div key={index}>
                                                    <DefaultInputImg key={`${index}}-B`} handleFun={getNewPicUrl}/>
                                                    <DefaultInput key={`${index}}-A`} defaultValue={pictureBase64Url ?? data?.base64Url} 
                                                                  givenLabelText='Átkonvertált kép' 
                                                                  inputProps={formFields[item]}/>   
                                                   {(pictureBase64Url || data?.base64Url) && (
                                                     <img src={pictureBase64Url ?? data?.base64Url} 
                                                          alt="Előnézet" 
                                                          style={{ maxWidth: '100%', margin: '10px' }} />)}
                                                </div>);
                else if( item === 'description') return <DefaultTextArea key={index} defaultValue={data?.description ?? ''}  inputProps={formFields[item]} />
                else if( item === 'titleUrl') return <DefaultInput key={index} defaultValue={data?.titleUrl ?? ""}  inputProps={formFields[item]}/>
                else{
                   return <DefaultInput defaultValue={data?.[item] ?? ""} key={index} inputProps={formFields[item]}/>
                }  
            })
        }
          
              <BtnGroup btn={[
                    {text : 'Adatfeltöltés / Módosítása' , type : "submit" , className: "btn btn-success"},
                    {text : 'Új űrlap', inputProps: {onClick : handleNewForm} , className: "btn btn-warning"}
                ]}/>
                
      </form>
      <hr />
      <GetUploadedSections
        setInputValues={setDefaultValues}
        eventModify={eventModify}
        collectionName={collectionName}
        docs={docs}
      />
    </div>
    
  );
};

export default FormView;
