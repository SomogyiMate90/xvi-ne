import { useContext } from "react";
import metaAndOpengraphTag from "../../../Functions/helm/metaAndOpengraphTag";
import Theme from "../../../Functions/themes/ThemeContext";
import getShortedText from "../../../Functions/Utils/getShortedText";
import PageHelmet from "../../../Components/PageHelmet";
import LinkBTN from "../../../shared/LinkBTN";
import DefaultFigure from "../../../shared/DefaultFigure";

const EventsComp = ({expandedEvents}) => {

    const actualTheme = useContext(Theme);

    return (
      <>
        <PageHelmet helmetObj={metaAndOpengraphTag.programs}/>
        <div className={`page-events ${actualTheme}`}>
          <div className="hero-img firendship-hero-img">
            <h1 className="poz-center">Közelgő események, Hírek</h1>
          </div>
  
          {expandedEvents.map(({docId, data}, index) => {
  
            /**
             * @type {Array}
             */
            const splitedDescription = data?.description.split('\n');
  
            const descriptionParagraps = splitedDescription.filter(item=> item !== '');
  
            const shortedDescription = getShortedText(descriptionParagraps,320)
  
            return(
              <article className="py-1 px-3" key={docId}>
           
                <h2 className="mb-4 px-1">{data?.title}</h2>
                <div
                  className={
                    index % 2 === 0
                      ? "d-md-flex flex-md-row justify-content-evenly"
                      : "d-md-flex flex-md-row-reverse justify-content-evenly"
                  }
                >
                <div className="d-flex flex-column justify-content-evenly mb-3">
                {
                 shortedDescription.map((i,n)=>(<p key={n}>{i}</p>))
                }
                <LinkBTN text="Tovább olvasom" url={`/programok/${data?.titleUrl}`}/>
                </div>
       
                   {data?.base64Url && ( <DefaultFigure props={{imgSrc : data?.base64Url , imgAlt : data?.picAlt  }}/> )}    
                </div>
              </article>
            )}
          )}
         </div>
      </>
    );
  }

  export default EventsComp;