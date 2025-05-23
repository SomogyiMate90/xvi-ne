import { useContext } from "react";
import metaAndOpengraphTag from "../../../Functions/helm/metaAndOpengraphTag";
import Theme from "../../../Functions/themes/ThemeContext";
import getShortedText from "../../../Functions/Utils/getShortedText";
import PageHelmet from "../../../Components/PageHelmet";
import LinkBTN from "../../../shared/LinkBTN";
import DefaultFigure from "../../../shared/DefaultFigure";
import ImgHTML from "../../../shared/ImgHTML";
import InlineLink from "../../../shared/InlineLink";

const EventsComp = ({children,expandedEvents=[]}) => {

    const actualTheme = useContext(Theme);

    return (
      <>
        <PageHelmet helmetObj={metaAndOpengraphTag.programs}/>
        <div className={`page-events ${actualTheme}`}>
          <div className="hero-img firendship-hero-img">
            <h1 className="poz-center top mb-0 mt-3">Közelgő események, Hírek</h1>

          <p className="position-absolute bottom-0 mb-1 mx-1 mb-md-3 mb-xl-5 mx-xl-5 mx-3 fs-md-3 d-inline bg-my-light "> Fedezd fel egyesületünk legújabb programjait nem csak egyesületi tagoknak! </p>

          </div>
          <p> Családi napok, közösségi tréningek és kreatív workshopok várnak rád. <InlineLink to='/csatlakozz'>Csatlakozz</InlineLink> és építsük együtt a közösségünket. Nézz körbe folyamatosan frissülő programkinálatunkban!</p>
          {children}
          {expandedEvents.map(({docId, data}, index) => {

            /**
             * @type {Array}
             */
            const splitedDescription = data?.description.split('\n');
  
            const descriptionParagraps = splitedDescription.filter(item=> item !== '');
  
            const shortedDescription = getShortedText(descriptionParagraps,320)
  
            return(
              <article className="py-1 px-3" key={docId}>
           
                <h2 className="mb-4 mt-2 px-1">{data?.title}</h2>
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
                <LinkBTN anStyle={index % 2 === 0 ? 'text-start' : 'text-end'} text="Tovább olvasom" url={`/programok/${data?.titleUrl}`}/>
                </div>
                <DefaultFigure props={{imgAlt : data.picAlt || 'Nincs kép' }}>
                  <ImgHTML src={data?.highPicture?.url} picAlt={data?.picAlt}/>
                </DefaultFigure>
                </div>
              </article>
            )}
          )}
         </div>
      </>
    );
  }

  export default EventsComp;