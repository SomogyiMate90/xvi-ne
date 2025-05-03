import { useEffect, useState } from "react";
import getStorageFileList from "../../Functions/firebase/fireStorage/getStorageFileList";
import downloadFile from "../../Functions/firebase/fireStorage/downloadFile";
import { useImmer } from "use-immer";
import deleteFile from "../../Functions/firebase/fireStorage/deleteFile";

const ImgFromStorage = ({storageProps,classProps = ''}) =>{
    const [imgUrl, setImgUrl] = useState('/assets/img/no-img.png');
    const [renderingList, setRenderingFileList] = useImmer([]);

    const { folderPath, namePart = undefined, picAlt  } = storageProps;


    useEffect(()=>{

        async function getMainPic() {
           
          const fileLists = await getStorageFileList(folderPath);
          console.log('fileLists db lekérés volt')
          console.log(fileLists)

          if(namePart === undefined){

            let renderedList = [];

            for(let i = 0; i < fileLists.length; i++){

              const url = await downloadFile(fileLists[i].fullPath)
              const renderedObj = { path : fileLists[i].fullPath, url, picName : fileLists[i].name}
              renderedList.push(renderedObj)
            }

            setRenderingFileList(renderedList);
          }
          else{
            const miniPicPath = fileLists.find(i => i.name.includes(namePart));
            if(!miniPicPath) return;
    
            const path = miniPicPath.fullPath;
            if(!path) return;
  
            const fireStoreMainImg = await downloadFile(path);
            setImgUrl(fireStoreMainImg)
          }
        }
  
        getMainPic()
  
      },[folderPath])

      if(typeof classProps !== 'string'){
        console.error('classProps az ImgFromStorage komponensben nem string  (HIba!)');
        return;
    }

    if(namePart === undefined){
      
      return(<RenderedImg  renderingList={renderingList} />)
        
        

    }
    else{
      return(
        <img src={imgUrl} className={classProps}  alt={`${picAlt ?? 'Nincs kép név' }`} />
      )
    }

}

export default ImgFromStorage;



const RenderedImg = ({renderingList}) =>{

  if (renderingList.length === 0) return

  return(
    <>
    <p className="bg-secondary mb-0 py-2 text-white">Adatbázisban már szereplő borítóképek</p>
    <div className="d-flex justify-content-evenly gap-2 bg-secondary">
    {
      renderingList.map(( i,n)=>{
        return(
    
          <figure id={`${n}-a-b-c`} className="position-relative" style={{width: '24rem'}} key={n}>
            <button 
              onClick={()=>{deleteFile(i.path); document.getElementById(`${n}-a-b-c`).remove()}}
              className="btn btn-close red bg-white position-absolute top-0 end-0">
            </button>

            <img className="w-100 object-fit-contain border rounded" src={i.url} alt={i.picName} />
            <figcaption>{i.picName}</figcaption>
          </figure>
        
        )
      })
    }
    </div>
    </>
  )
}
