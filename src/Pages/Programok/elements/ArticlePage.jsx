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
        
        const { address, base64Url, picAlt, description, title  } = foundedDoc;

        console.log(description.slice(0,154))

        const splitedDescription = description.split('\n');
  
        const descriptionParagraps = splitedDescription.filter(item=> item !== '');

        const helmetObj = {metaNameObj: { title: `NOE XVI. - ${title}`,
          description: `${description.slice(0,154).replaceAll('\n',' ')}`,
          keywords: ` noe, program, ${title || ''}, ${address || 'xvi. kerület'}, foglalkozás, foglalkozások, előadás, előadások, hír, hírek, nagycsaládosok, családbarát, közösség, budapest`,
          robots: "index,follow"
      }}

        setSelectedComp(
// KI szervezni külön függvénybe!!
          <>
          <PageHelmet helmetObj={helmetObj}/>
          <div key={foundedObj[0].docId} className="page-article d-flex flex-column align-items-center">
            <div className="icon-box d-flex align-self-end gap-2">
            <CalendarBTN  event={foundedDoc} />
            <MapBtn address={address}/>
            </div>

            <h1>{title}</h1>
            <div className="clearfix">
              <DefaultFigure classStyle='p-0 p-lg-2 ps-xl-4 float-xl-end mb-0' props={{ imgSrc: base64Url, imgAlt: picAlt }} />
              <div className="descriptions">{descriptionParagraps.map((i,n)=>(<p key={n}>{i}</p>))}</div>
            </div>
            <div className="clear-fix"></div>
            <ArticleElements docContent={foundedDoc} />
          </div>
          </>
        );
      } else {
        // Ha nem található program, esetleg hibát jelezhetsz itt
        setSelectedComp(<NotFound />);
      }
    } else {
      // Ha az adatok még nem jöttek meg, várunk 4 másodpercet, majd hibát mutatunk
      timeoutId = setTimeout(() => {
        setSelectedComp(<ErrorElement />);
      }, 4000);
    }
    return () => clearTimeout(timeoutId);
  }, [eventObj]);
  
 

  return <>{selectedComp}</>;
};

export default ArticlePage;
