import { useEffect, useState } from "react";
import { useImmer } from "use-immer";
import submitFunction from "./handleSubmit";
import * as formField from './formsFileds.js';
import getEnglishUrl from "../../../../Functions/Utils/getEnglishUrl.js";
import DefaultInput from "../../../../shared/DefaultInput.jsx";
import getPictureSrcBase64 from "../../../../Functions/Utils/getPictureSrcBase64.js";
import GetUploadedSections from "../Forms/GetUploadedSections.jsx";
import DefaultTextArea from "../../../../shared/DefaultTextArea.jsx";
import BtnGroup from "../Forms/BtnGroup.jsx";
import EditFireStorage from "./EditFireStorage.jsx";
import upLoadFireStorage from "../../../../Functions/firebase/fireStorage/upLoadFireStorage.js";
import LoadingTime from "../../../../Components/LoadingTime.jsx";
import ImgFromStorage from "../../../../shared/hook/ImgFromStorage.jsx";
import toNavigateTop from "../../../../Functions/toNavigateTop.js";
import getStorageFileList from "../../../../Functions/firebase/fireStorage/getStorageFileList.js";
import setCurrentDoc from "../../../../Functions/firebase/setCurrentDoc.js";
import downloadFile from "../../../../Functions/firebase/fireStorage/downloadFile.js";


const FormView = ({ eventModify, collectionName, docs }) => {
  const [formKey, setFormKey] = useState(0); // form elem eldobásához új űrlap esetén
  const { changedEvent, setChangedEvent } = eventModify; // adat ujra lekérdezése a "Submit" esemény után
  const [defaultValues, setDefaultValues] = useImmer({}); // korábban felöltött elem kiválasztása
  const [pictureBase64Url, setPictureBase64Url] = useState(null); // Átalakított kép src tárolása
  const [englishUrl, setEnglishUrl] = useState(null); // helyes URL elkészítéséhez, hogy ne legyen tele "%" és szám karakterekkel a link
  const [defFotoWidth, setPhotoWidth] = useState(600);
  const [uploading, setUploading] = useState(null)

  const [bigFiles, setBigFiles] = useImmer([]);
  const [mainFile, setMainFile] = useImmer([])

 const {docId , data} = defaultValues;

  /**
   * @type {Object}
   */
  const formFields = formField[collectionName];
  const formFieldsElemets = Object.keys(formFields)

  useEffect(()=>{
    if(formFields.photoWidth){
      setPhotoWidth(formFields.photoWidth.photoWidth)
    }
  },[formFields.photoWidth])

  // adatfelötlés módosítás
  const handleSubmit = async (event) => {
    event.preventDefault();
    setUploading(true)

    try{
      const docIdResp = await submitFunction(event, collectionName);
      if (docIdResp !== 'Hiba történt') {
        
        const resp = await upLoadFireStorage(bigFiles,`/${collectionName}/${docIdResp}`);
        const resp2 = await upLoadFireStorage(mainFile,`${collectionName}/mainPic/${docIdResp}`);

        setTimeout( async ()=>{
          
          const mainPicFiles = await getStorageFileList(`${collectionName}/mainPic/${docIdResp}`);
          
          const mainPicObj = {lowPicture: null,highPicture: null};
          
          for(let i = 0; i<mainPicFiles.length;i++){
            
            const uploadedFile = mainPicFiles[i];
            const { name, fullPath } = uploadedFile;

            const url = await downloadFile(fullPath);
            
            if(name.includes('400x267')){
              mainPicObj.lowPicture =  {...uploadedFile, url}
              
            }
            else{
              mainPicObj.highPicture =  {...uploadedFile, url}
            }
            
          }
          
          setCurrentDoc(mainPicObj,collectionName,docIdResp)        
        },2000)

        if(resp === 'Kész' && resp2 === 'Kész'){
          handleNewForm()
        }
        else{
          handleNewForm()
          throw new Error('A képfeltöltés nem sikerült')
        }
      }
      else{
        throw new Error('A feltötlés már az elején sikertelen')
      }
    }
    catch(e){
      alert(e);
    }
    finally{
      setTimeout(()=>{
        setUploading(false);
      },2500)
      toNavigateTop({behavior : 'smooth'});
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
      const compresedPicBase64Url = await getPictureSrcBase64(file,defFotoWidth);
      setPictureBase64Url(compresedPicBase64Url);
      setMainFile(event.target.files)
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
    setPictureBase64Url(null);
    setEnglishUrl(null);
    setBigFiles([]);
    setChangedEvent(!changedEvent);
    toNavigateTop({behavior : 'smooth'});
}


  return (
    <div className="form-view-admin">
      <h3 className="text-center">Tölts ki az adatlapot</h3>
      <DefaultInput key={formKey+1*2} defaultValue={docId ?? ""} givenLabelText="Dokumentum azonosító" inputProps={formField.docId.docId}/>
      <form key={formKey} onSubmit={handleSubmit} className="mb-3">
      <DefaultInput defaultValue={englishUrl ?? data?.titleUrl ?? ''} givenLabelText='Dinamikus URL' inputProps={formField.dinamicUrl.titleUrl}/>
        {
            formFieldsElemets.map((item,index)=>{
                
                if(item === 'title') return <DefaultInput defaultValue={data?.title ?? ''} 
                                                        key={index} 
                                                        fun={{onChange: (event)=>handleSetEnglisCharacters(event)}} 
                                                        inputProps={formFields[item]}/>

                if(item === 'mainPic') return (
                                                  <div key={index} className="rounded-2 bg-danger-subtle p-2">
                                                   <DefaultInput fun={{onChange: getNewPicUrl}}  inputProps={formFields[item].mainImage} /> 

                                                   <ImgFromStorage storageProps={{folderPath : `${collectionName}/mainPic/${docId}`, picAlt : data?.picAlt ?? '' }} />

                                                   {
                                                    pictureBase64Url && (
                                                          <div className="bg-success-subtle pt-2">
                                                          <span className="mx-5 text-center d-block bg-success-subtle"><b>Feltöleni kívánt új borító kép</b><br /> ( A régiek maradnak, ezért egyesével kell kitörölni őket 
                                                            [ <span className="text-danger">piros x</span> ] )</span>
                                                          <img src={pictureBase64Url.src} 
                                                           alt="Előnézet" 
                                                           className="bg-success-subtle"
                                                           style={{ maxWidth: '150px', margin: '10px', padding: "15px"}} 
                                                           />
                                                           </div>
                                                                                                                     
                                                    )
                                                   }   
                                                   <DefaultInput 
                                                        inputProps={{id:"picAlt", labelText: 'Mit ábrázol a kép?', required: true, className: "form-control text-success "}} 
                                                        defaultValue={data?.picAlt ?? ''}/>
                                                   </div>
                                                  )                                    
                else if( item === 'description') return <DefaultTextArea key={index} defaultValue={data?.description ?? ''}  inputProps={formFields[item]} />
                else if( item === 'titleUrl') return <DefaultInput key={index} defaultValue={data?.titleUrl ?? ""}  inputProps={formFields[item]}/>;
                else if( item === 'fireStorage') return <EditFireStorage key={index} docId={docId} files={{bigFiles, setBigFiles}}/>
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
       handleNewForm={handleNewForm}
        setInputValues={setDefaultValues}
        eventModify={eventModify}
        collectionName={collectionName}
        docs={docs}
      />
      {
        uploading && (<LoadingTime 
          text={{title : 'Feltöltés', 
                  content: ['Várj türelmessen!',
                            'Amig nem tűnik el ez az ablak, addig ne navigálj el!']}}/>)

      }
    </div>
    
  );
};

export default FormView;
