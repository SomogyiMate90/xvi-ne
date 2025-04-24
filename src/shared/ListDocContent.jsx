import { useState } from "react";
import deleteFirestoreDoc from "../Functions/firebase/deleteFirestoreDoc";
import deleteFile from "../Functions/firebase/fireStorage/deleteFile";
import getStorageFileList from "../Functions/firebase/fireStorage/getStorageFileList";
import toConverStringAny from "../Functions/Utils/toConverStringAny";
import BtnGroup from "../Pages/Admin/elements/Forms/BtnGroup";
import LoadingTime from "../Components/LoadingTime";

/**
 *
 * @param {object} param0
 * @returns
 */
const ListDocContent = ({setInputValues, eventModify, collectionName,item }) => {
  const { docId, data } = item;
  const [deleting, setDeleting] = useState(false)

  const { changedEvent, setChangedEvent } = eventModify;

  const handleDelete = async () =>{
      setDeleting(true);

      await deleteFirestoreDoc(collectionName,docId)

      const respStorageList = await getStorageFileList(`galeria/${docId}`);

    console.log(respStorageList)

      const length = respStorageList.length;

      if(length > 0){
        for (let i = 0; i < length; i++) {
          const filePath = respStorageList[i].fullPath;
          await deleteFile(filePath)
        }

      }

      setDeleting(false);
      setChangedEvent(!changedEvent);
  }

  const setDefaultValues = () =>{
    setInputValues({data, docId})
    
    const h1El = document.getElementById("h1-in-form");
    h1El.scrollIntoView({ behavior: 'smooth' })
  }


  const keyList = Object.keys(data);

  return (
    <div className=" doc-window">
      {keyList.map((it, ind) => {
        
        if(it === 'base64Url'){
          return(
            <pre key={ind}>
              Kép:
              <img  src={data[it]} width='200px' alt="" />
            </pre>
          )
        }
        else{
          const convertedElement = toConverStringAny(data[it]);

          return (    
              <pre key={ind}>
                  {`${it} : ${convertedElement}`}
              </pre>
          );
        }


      })}

      <pre>
        docId : {docId}
      </pre>

      <BtnGroup btn={
            [{inputProps :{onClick : setDefaultValues},className : "btn btn-info",text: 'Javítás'},
              {inputProps :{onClick : handleDelete},className : "btn btn-danger",text: 'Törlés'}

            ]}/>
      {
        (deleting && <LoadingTime text={{title: "Törlés", content: ["Épp töröli az adatokat...",'Várd meg amig eltűnik ez az ablak!']}}/>)
      }
    </div>
  );
};

export default ListDocContent;
