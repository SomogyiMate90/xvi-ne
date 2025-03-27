import { useContext } from "react";
import SliderPanel from "../../Components/SliderPanel";
import CardFolder from "./element/CardFolder";
import events from "./element/testEvcents";
import Theme from "../../Functions/themes/ThemeContext";
import PageHelmet from "../../Components/PageHelmet";
import metaAndOpengraphTag from "../../Functions/helm/metaAndOpengraphTag";

const GalleryPage = () =>{

    const theme = useContext(Theme)

    const contentFolders = Array.from({ length: 12 }, () => {
        // Véletlenszerű belső tömb hossza 3 és 11 között
        const innerLength = Math.floor(Math.random() * 9) + 3;
        // Létrehozunk egy belső tömböt a megadott hosszal,
        // ahol minden elem 10 és 1200 közötti véletlenszerű szám
        return Array.from({ length: innerLength }, () => 
          Math.floor(Math.random() * (1200 - 10 + 1)) + 10
        );
      });

      const eventsArray = events;

    //   console.log(contentFolders)

    return(
        <>
        <PageHelmet helmetObj ={metaAndOpengraphTag.gallery}/>
        <div className={`page-gallery ${theme}`}>
            <div className="hero-img camera-hero-img">
                <h1 className="poz-center">Galéria</h1>


            </div>


         
                    <div className={`foto-side ${theme}`}>
                 
                        {contentFolders.map((item,index)=>{
                            return(
                            <CardFolder key={index} LoremId={contentFolders[index]} text={eventsArray[index]} />
                            )
                        })}
                    </div>
          
            <div className="row g-2">
           
            </div>

        </div>
        </>
    )
}

export default GalleryPage;