import { useContext, useEffect, useState } from "react";
import DefaultFigure from "../../../shared/DefaultFigure";
import FireStoreContext from "../../../Functions/contexts/fireSroreContext";
import LoadingTime from "../../../Components/LoadingTime";
import ErrorElement from "../../../Components/ErrorElement";
import CalendarBTN from "../../../shared/CalendarBTN";
import NotFound from "../../../Components/NotFound";
import MapBtn from "../../../shared/MapBtn";
import ArticleElements from "./ArticleElements";
import PageHelmet from "../../../Components/PageHelmet";
import ImgFromStorage from "../../../shared/hook/ImgFromStorage";
import RenderingArticleEl from "./RenderingArticleEl";

const ArticlePage = () => {
  const [selectedComp, setSelectedComp] = useState(<LoadingTime text={{ title: "Töltés", content: "Lekéri a szervertől" }} />);
  const eventObj = useContext(FireStoreContext);

  
  
  useEffect(() => {
    let timeoutId;

    if (eventObj.programok) {
      // Adatok betöltése esetén
      const uri = window.location.pathname; 
      const searchString = uri.replace("/programok/", "");
      const foundedObj = eventObj.programok.filter(
        (it) => it.data.titleUrl === searchString
      );
      if (foundedObj.length > 0) {
        const foundedDoc = foundedObj[0].data;
        const docId =foundedObj[0].docId;
        
        const { address, description, title  } = foundedDoc;

        const helmetObj = {metaNameObj: { title: `NOE XVI. - ${title}`,
          description: `${description.slice(0,154).replaceAll('\n',' ')}`,
          keywords: ` noe, program, ${title || ''}, ${address || 'xvi. kerület'}, foglalkozás, foglalkozások, előadás, előadások, hír, hírek, nagycsaládosok, családbarát, közösség, budapest`,
          robots: "index,follow"
      }}


        setSelectedComp(
          <>
          <PageHelmet helmetObj={helmetObj}/>
          <RenderingArticleEl  docId={docId} doc={foundedDoc}  />
          </>
        );
      } else {
        setSelectedComp(<NotFound />);
      }
    } else {
      timeoutId = setTimeout(() => {
        setSelectedComp(<ErrorElement />);
      }, 4000);
    }
    return () => clearTimeout(timeoutId);
  }, [eventObj]);
  
 

  return <>{selectedComp}</>;
};

export default ArticlePage;
