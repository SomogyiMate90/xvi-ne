import { useContext, useEffect, useState } from "react";
import CardFolder from "./element/CardFolder";
import Theme from "../../Functions/themes/ThemeContext";
import PageHelmet from "../../Components/PageHelmet";
import metaAndOpengraphTag from "../../Functions/helm/metaAndOpengraphTag";
import FireStoreContext from "../../Functions/contexts/fireSroreContext";
import { useImmer } from "use-immer";
import LoadingTime from "../../Components/LoadingTime";
import ErrorElement from "../../Components/ErrorElement";
import NotFound from "../../Components/NotFound";

const GalleryPage = () =>{
    const theme = useContext(Theme);
    const fireStoreContent = useContext(FireStoreContext);
    const  [galeria , setGaleria] = useImmer([])

    useEffect(()=>{
        
        if(fireStoreContent.galeria) setGaleria(fireStoreContent.galeria)

    },[fireStoreContent]);



    return(
        <>
        <PageHelmet helmetObj ={metaAndOpengraphTag.gallery}/>
        <div className={`page-gallery ${theme}`}>
            <div className="hero-img camera-hero-img">
                <h1 className="poz-center">Galéria</h1>
            </div>
         
                    <div className={`foto-side ${theme}`}>
                 
                        {
                        galeria.length > 0  ? (galeria.map(({docId, data},index)=>{
                            return(
                            <CardFolder key={index} docId={docId} data={data}/>
                            )
                        }))

                        : 
                        
                        <AlternativComp />
                        }
                    </div>
        </div>
        </>
    )
}

export default GalleryPage;


const AlternativComp = () =>{
    const [timeOut, setTimeOut] = useState(false)

    setTimeout(()=>{
        setTimeOut(true)
    },6000)

    return(  timeOut === false ? <LoadingTime /> : <ErrorElement/>)


}
