import { useContext, useEffect, useState } from "react";
import FireStoreContext from "../../Functions/contexts/fireSroreContext";
import LoadingTime from "../../Components/LoadingTime";
import ErrorElement from "../../Components/ErrorElement";
import EventsComp from "./elements/EventsComp";

const Events = () => {

  

   const eventObj = useContext(FireStoreContext);
   const [seletecComp, setSelectedComp] = useState(<LoadingTime text={{title: 'Töltés', content: 'Lekéri a szervertől'}}/>)
  console.log(eventObj.programok)
   useEffect(()=>{
      let timeoutId;
      if(eventObj.programok){
        console.log('Belépett az if blokba')

        if(eventObj.programok.length > 0) {
          setSelectedComp(<EventsComp expandedEvents={eventObj.programok}/>)
        }
        else{
          setSelectedComp(<h1>Nincs adat feltöltve</h1>)
        }
      }
      else{
        timeoutId = setTimeout(() => {
          setSelectedComp(<ErrorElement />);
        }, 10000);
      }
      return () => clearTimeout(timeoutId);
   },[eventObj])

   return(
    <>
    {seletecComp}
    </>
   )

};

export default Events;


     {/* <CalendarBTN event={{title: data?.title , location: data?.address, startTime : data?.startTime, endTime : data?.endTime, description : data?.description }}/> 
      
  eredeti jsonos 

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
