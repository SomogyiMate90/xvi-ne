import { useContext, useEffect, useState } from "react";
import DefaultFigure from "../../../shared/DefaultFigure";
import FireStoreContext from "../../../Functions/contexts/fireSroreContext";
import LoadingTime from "../../../Components/LoadingTime";
import ErrorElement from "../../../Components/ErrorElement";
import CalendarBTN from "../../../shared/CalendarBTN";
import NotFound from "../../../Components/NotFound";

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
        
        const { address, base64Url, picAlt, description, title, startTime , endTime  } = foundedDoc;

        console.log(foundedDoc)

        const splitedDescription = description.split('\n');
  
        const descriptionParagraps = splitedDescription.filter(item=> item !== '');
        setSelectedComp(
// KI szervezni külön függvénybe!!
          <div key={foundedObj[0].docId} className="page-article d-flex flex-column align-items-center">
            <CalendarBTN classStyle='calendar align-self-end text-primary' event={foundedDoc} />
            <h1>{title}</h1>
            <div className="clearfix">
              <DefaultFigure classStyle='p-0 p-lg-2 ps-xl-4 float-xl-end mb-0' props={{ imgSrc: base64Url, imgAlt: picAlt }} />
              <div className="descriptions">{descriptionParagraps.map((i,n)=>(<p key={n}>{i}</p>))}</div>
            </div>
            <div className="clear-fix"></div>
            <div className="artilce-elemets">
              <p>Térkép: <span>{address}</span></p>
            </div>
          </div>
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
