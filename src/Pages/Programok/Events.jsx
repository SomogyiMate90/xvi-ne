import { useContext } from "react";
import FireStoreContext from "../../Functions/contexts/fireSroreContext";
import LoadingTime from "../../Components/LoadingTime";
import ErrorElement from "../../Components/ErrorElement";
import EventsComp from "./elements/EventsComp";

const Events = () => {
  const fireBaseContent = useContext(FireStoreContext);

  if (!fireBaseContent.programok) {
    return (
      <EventsComp>
        <LoadingTime text={{ title: "Töltés", content: "Lekéri a szervertől" }} />
      </EventsComp>
    );
  }

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