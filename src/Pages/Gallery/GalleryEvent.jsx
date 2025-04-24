import { useContext, useEffect, useState } from "react";
import FireStoreContext from "../../Functions/contexts/fireSroreContext";
import LoadingTime from "../../Components/LoadingTime";
import NotFound from "../../Components/NotFound";
import { useImmer } from "use-immer";
import GalleryEventArticle from "./element/GalleryEventArticle";

const GalleryEvent = () =>{
    const [viewState, setViewState] = useState('loading');
    const [articleData, setArticleData] = useImmer([])

    const fireStore = useContext(FireStoreContext);
    const galeriaElements = fireStore.galeria;
  
    useEffect(()=>{

     if(Array.isArray(galeriaElements)){
         const uri = decodeURIComponent(window.location.pathname); 
         const articleTitleURL = uri.slice(9)  
   
         const foundedArticle = galeriaElements.find(({ data, doc }) => {         
            return data.titleUrl === articleTitleURL;
        });

        foundedArticle === undefined ? setViewState('failed') : (()=>{setViewState('success');setArticleData(foundedArticle)})();
     }

    },[fireStore])

    return(
        <article>
         {
        viewState === "loading" ? (
          <LoadingTime />
        ) : viewState === "failed" ? (
          <NotFound />
        ) : (
          <GalleryEventArticle article={articleData} />
        )
      }
        </article>
    )
}

export default GalleryEvent;