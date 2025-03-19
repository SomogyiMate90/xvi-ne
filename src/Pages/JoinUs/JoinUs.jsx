import { useContext } from "react";
import AccordionItem1 from "./elements/AccordionItem1";
import AccordionItem2 from "./elements/AccordionItem2";
import AccordionItem3 from "./elements/AccordionItem3";
import Theme from "../../Functions/themes/ThemeContext";

const JoinUs = () => {

  const theme = useContext(Theme)

  return (
    <div>
      <h1>Csatlakozz?</h1>
      <div className={`accordion accordion-flush ${theme}`} id="accordionFlushExample">

        <AccordionItem1/>
        <AccordionItem2/>
        <AccordionItem3/>



      </div>
    </div>
  );
};

export default JoinUs;
