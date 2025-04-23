import { useEffect } from "react";
import getPictureSrcBase64 from "../../../../../Functions/Utils/getPictureSrcBase64";
import { useImmer } from "use-immer";

const PreViewreIMG = ({selectedFiles}) =>{
    const [base64Lists, setBase64List] = useImmer([])

    useEffect(()=>{
        setBase64List([])
        async function readFileSUrl() {
            
            for(let i = 0; i < selectedFiles.length ;i++){
                const base64Url = await getPictureSrcBase64(selectedFiles[i],200);
                setBase64List(draft=>draft.concat(base64Url))
            }
        }

        readFileSUrl();

    },[selectedFiles])

    return(
        <div className="d-flex gap-2 pt-2 flex-wrap justify-content-evenly">
            {
                base64Lists.map((i,n)=>(<img className={`${n === base64Lists.length-1 ? ' me-auto' : ''} border border-2`} key={n} src={i} alt={`kép: ${n}`} />))              
            }
        </div>
    )

}

export default PreViewreIMG;