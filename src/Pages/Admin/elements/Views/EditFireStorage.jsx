import { useEffect } from "react";
import PreViewreIMG from "./elements/PreViewreIMG";
import { useImmer } from "use-immer";
import getStorageFileList from "../../../../Functions/firebase/fireStorage/getStorageFileList";
import downloadFile from "../../../../Functions/firebase/fireStorage/downloadFile";
import deleteFile from "../../../../Functions/firebase/fireStorage/deleteFile";

const EditFireStorage = ({docId,files}) =>{

    const {bigFiles, setBigFiles} = files;
    const [listPics, setList] = useImmer([])

    const handleCahnge = (e) =>{
        setBigFiles(e.target.files)
    }
    
    useEffect(()=>{
        
        if(docId !== undefined){
            const getFiles = async () => {
                console.log(docId)
                const fileList = await getStorageFileList(`galeria/${docId}/`);
                const length = fileList.fullPath.length; // Ekkor biztos lehetsz benne, hogy tömb a fullPath és name
                    console.log(fileList) 
                    console.log(fileList.length) 
                    console.log(length) 
                    console.log(Array.isArray(fileList.fullPath).length) 
      
                    for (let i = 0; i < length; i++) {
                        
                        const filePath = fileList.fullPath[i];
                        console.log(filePath)
                        const url = await downloadFile(filePath);
                        console.log(url)
                        setList(draft => {
                            draft.push({ url: url, filePath : filePath,  name: fileList.name[i] });
                          });
            }}
            getFiles();
        }
    },[docId])

    const handleDeleteBtn = (id) =>{

        deleteFile(id);
        const liEl = document.getElementById(id);

        liEl.remove();
    }
    

return(
    <>
    <div className="mb-3">
        <label htmlFor='fireStorePic'>Képek</label>
        <input 
            id='fireStorePic'
            className='form-control' 
            onChange={(e)=>handleCahnge(e)}
            type="file"
            accept="image/*"
            multiple
            />
        <PreViewreIMG selectedFiles={bigFiles} />
        
        
    </div>
    <hr />
    <div className="">
        <h5>Adatbázisban szereplő feltöltött képek</h5>
        <ol className="list-unstyled d-flex flex-wrap gap-2 justify-content-center">
            {
                listPics.map((i,n)=>{
                    return(
                        <li id={i.filePath} key={n}>
                            <figure className="position-relative">
                                <button 
                                    className="z-3 btn btn-close red position-absolute bg-body opacity-100 end-0" type="button"
                                    onClick={()=>handleDeleteBtn(i.filePath)}
                                    ></button>
                                <img className="uploaded-img" src={i.url} alt="" />
                                <figcaption>{i.name}</figcaption>
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