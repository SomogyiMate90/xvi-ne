import { useContext, useEffect, useState } from "react";
import FireStoreContext from "../Functions/contexts/fireSroreContext";

import animateSliderPanel from "../Functions/animateSliderPanel";
import ImgHTML from "../shared/ImgHTML";
import Theme from "../Functions/themes/ThemeContext";

const Tamogatok = () =>{
    const fireStoreData = useContext(FireStoreContext); 
    const [RenderedComp, SetRenderesComp] = useState(<></>)
    const theme = useContext(Theme)

     const elements = fireStoreData.partnerek;

    useEffect(()=>{

        if(elements && elements.length > 0){
            const newComp = fireStoreData?.partnerek.map(( item,index)=>{
               
                const {data, docId} = item;    
                const {picAlt ,  title , url, lowPicture} = data;
        
                return(
                    <li className="d-none d-xxl-block animate__animated " key={docId}>
                        <a href={url || '/'} rel="noopener noreferrer" target="_blank">
                        <ImgHTML src={lowPicture?.url} picAlt={picAlt} />                   
                        </a>
                    </li>
                )
                })

                SetRenderesComp(newComp)

                setTimeout(()=>{
                    animateSliderPanel('partnerek-lists',0.45)
                },1000)
        }

    },[fireStoreData])


    return(
        <aside className={`partnerek-aside ${theme}`}>
        <h2 className="text-center fs-4">Támogatóink</h2>
        <ul id="partnerek-lists" className="d-flex flex-row gap-2 justify-content-evenly align-items-center" >

            {
                RenderedComp
            }
           

        </ul>
    </aside>
    )
}

export default Tamogatok;