import { getDownloadURL, ref } from "firebase/storage";
import getFireStorageDB from "../Functions/firebase/fireStorage/getFireStorageDB";
import { downMark, eyeIcon } from "../Functions/themes/icons";
import { useState } from "react";

const DownLoadBTN = ({ classNameText = "", text, funcionArgs }) => {
  const { eleresiUt, addfileName = 'file', read = false } = funcionArgs;
  const storageDB = getFireStorageDB();
  const [isLoading, setIsloading] = useState(false)

  const handleDownload = async () =>{

    setIsloading(true)
    
      const docRef = ref(storageDB, eleresiUt)

      try {
          const url = await getDownloadURL(docRef);

          if(read){
            // Fálj megjelenítés
            window.open(url, "_blank");
          }
          else{
            // Fájl letöltés
            const a = document.createElement("a");
            a.href = url;
            a.download = addfileName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          }
          setTimeout(()=>{

            setIsloading(false)
          },2500)
        } catch (error) {
          console.error("Hiba a fájl letöltésekor:", error);
          setIsloading(false)
        }

  }



  return (
      <button className={classNameText} onClick={handleDownload}>
        <div className="d-flex gap-2 align-items-center">
          <span>{text}</span>
          <span>{ isLoading === false ? (read === false ? downMark : eyeIcon) : <img src="/assets/img/loadingGIF.gif" alt="töltés"/>}</span>
        </div>
      </button>
  );
};

export default DownLoadBTN;
