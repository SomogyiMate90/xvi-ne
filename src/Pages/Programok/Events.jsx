import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Theme from "../../Functions/themes/ThemeContext";
import PageHelmet from "../../Components/PageHelmet";
import metaAndOpengraphTag from "../../Functions/helm/metaAndOpengraphTag";
import LinkBTN from "../../shared/LinkBTN";
import DefaultFigure from "../../shared/DefaultFigure";
import getShortedText from "../../Functions/Utils/getShortedText";

const Events = () => {
  /**
   * @type {Array<{ id: number, "article-img": string, "article-title": string, "article-paragraph": string[] }>}
   */
  const eventObj = useLoaderData();

  const actualTheme = useContext(Theme);

  return (
    <>
      <PageHelmet helmetObj={metaAndOpengraphTag.programs}/>
      <div className={`page-events ${actualTheme}`}>
        <div className="hero-img firendship-hero-img">
          <h1 className="poz-center">Közelgő események, Hírek</h1>
        </div>

        {eventObj?.programok.map(({docId, data}, index) => {

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
              <div className="d-flex flex-column justify-content-evenly">
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
};

export default Events;


     {/* <CalendarBTN event={{title: data?.title , location: data?.address, startTime : data?.startTime, endTime : data?.endTime, description : data?.description }}/> */}
      
{/*  eredeti jsonos */}
{/* 
        {eventObj.map((item, index) => {
          return (
            <article className="p-1" key={item.id}>
              <h2>{item?.["article-title"]}</h2>
              <div
                className={
                  index % 2 === 0
                    ? "d-sm-flex flex-sm-row justify-content-between"
                    : "d-sm-flex flex-sm-row-reverse justify-content-between"
                }
              >
                <div className="d-flex flex-column justify-content-evenly">
                  {item?.["article-paragraph"].map((i, x) => {
                    return <p key={x}>{i}</p>;
                  })}
                </div>
                <figure>
                  <img src={item?.["article-img"]} alt="Egy kapcsolodó kép" />
                </figure>
              </div>
            </article>
          );
        })}
        */}
