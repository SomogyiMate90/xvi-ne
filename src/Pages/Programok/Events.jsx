import { useContext } from "react";
import FireStoreContext from "../../Functions/contexts/fireSroreContext";
import LoadingTime from "../../Components/LoadingTime";
import ErrorElement from "../../Components/ErrorElement";
import EventsComp from "./elements/EventsComp";

const Events = () => {
  const fireBaseContent = useContext(FireStoreContext);

  // Ha még nincs adat, jelenítsük meg a LoadingTime-t
  if (!fireBaseContent.programok) {
    return (
      <EventsComp>
        <LoadingTime text={{ title: "Töltés", content: "Lekéri a szervertől" }} />
        {/* <img className="loading-gif" src="/assets/img/loadingGIF.gif" alt="Várakozás a tartalomra"/> */}
      </EventsComp>
    );
  }

  // Ha elérhető, de üres az adat
  if (fireBaseContent.programok.length === 0) {
    return (
      <EventsComp>
        <ErrorElement />
      </EventsComp>
    );
  }

  // Ha vannak adatok, rendereld az EventsComp komponenst
  return <EventsComp expandedEvents={fireBaseContent.programok} />;
};

export default Events;