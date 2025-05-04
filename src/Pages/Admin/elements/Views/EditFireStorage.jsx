import { useEffect, useState } from "react";
import PreViewreIMG from "./elements/PreViewreIMG";
import { useImmer } from "use-immer";
import getStorageFileList from "../../../../Functions/firebase/fireStorage/getStorageFileList";
import downloadFile from "../../../../Functions/firebase/fireStorage/downloadFile";
import deleteFile from "../../../../Functions/firebase/fireStorage/deleteFile";
import DefaultInput from "../../../../shared/DefaultInput";

const EditFireStorage = ({docId,files}) =>{

    const {bigFiles, setBigFiles} = files;
    const [listPics, setList] = useImmer([]);
    const [uplI, upLoadingCount] = useState(0);
    const [sC, storageCount] = useState(0);


    const handleCahnge = (e) =>{
        setBigFiles(e.target.files)
        upLoadingCount(e.target.files.length)
     
        
    }
    
    useEffect(()=>{
        
        if(docId !== undefined){
            const getFiles = async () => {
                const fileList = await getStorageFileList(`galeria/${docId}/`);
                const length = fileList.length; // Ekkor biztos lehetsz benne, hogy tömb a fullPath és name
                storageCount(length)
      
                    for (let i = 0; i < length; i++) {
                        
                        const filePath = fileList[i].fullPath;
                        const url = await downloadFile(filePath);
                        setList(draft => {
                            draft.push({ url: url, filePath : filePath,  name: fileList[i].name, contentType : fileList[i].contentType  });
                          });
            }}
            getFiles();
        }
    },[docId])

    const handleDeleteBtn = (id) =>{

        deleteFile(id);
        const liEl = document.getElementById(id);
        storageCount(c=>c-1)
        liEl.remove();
    }
    

return(
    <>
    <DefaultInput key={uplI+sC} givenLabelText='File-ok darabszáma' 
                  inputProps={{id : 'fileSzam', type:'number'}}
                  defaultValue={uplI+( Math.ceil(sC/2))}
                  />
    <div className="mb-3 bg-success-subtle">
        <label htmlFor='fireStorePic'>Képek</label>
        <input 
            id='fireStorePic'
            className='form-control' 
            onChange={(e)=>handleCahnge(e)}
            type="file"
            accept="
                    image/jpeg,
                    image/jpg,
                    image/webp,
                    image/gif,
                    image/bmp,
                    image/svg+xml,
                    audio/mpeg,
                    audio/wav,
                    audio/ogg,
                    application/x-mpegURL,
                    video/mp4,
                    video/webm,
                    video/ogg
                "
            multiple
            />
        <PreViewreIMG selectedFiles={bigFiles} />
        
        
    </div>
    <hr />
    <div className="file-list-in-data-base bg-secondary py-2 mb-3">
        <h5 className="text-white">Adatbázisban szereplő feltöltött fileok</h5>
        <ol className="list-unstyled d-flex flex-wrap gap-2 justify-content-center">
            {
                listPics.map((i,n)=>{

                      let CompType = <span>Nem megjeleníthető</span>

                      switch (true) {
                        case i.contentType.startsWith("image/") :
                            CompType = (<img className="d-block" src={i.url} alt="" />);
                          
                          break;
                        case i.contentType.startsWith("video/"):
                            CompType = (<figure className="d-block" >
                            <figcaption style={{color: 'white', fontWeight: 'bolder' }}></figcaption>
                            <video controls height={'100%'} width={"100%"}><source src={i.url} type={i.contentType} /></video>
                          </figure>)
                          break;
                        case i.contentType.startsWith("audio/"):
                            CompType = (
                            <figure>
                              <figcaption style={{color: 'white', fontWeight: 'bolder' }}></figcaption>
                          <audio className="d-block" controls ><source src={i.url} type={i.contentType} /></audio>
                            </figure>)            
                          break;
                        default:
                            CompType = <span className="text-white">Nem támogatott formátum switch blokban írd át</span>;
                      }

                    return(
                        <li id={i.filePath} key={n}>
                               <figure style={{width: "400px"}} className="position-relative">
                               <button 
                                    className="z-3 btn btn-close red position-absolute bg-body opacity-100 end-0" type="button"
                                    onClick={()=>handleDeleteBtn(i.filePath)}
                                    title={`Törlés ${i.name}`}
                                    ></button>
                                 {CompType}
                            <figcaption className="text-wrap">{i.name}</figcaption>
                             </figure>
                        </li>)
                })
            }
        </ol>
    </div>
    </>
)

}

export default EditFireStorage;