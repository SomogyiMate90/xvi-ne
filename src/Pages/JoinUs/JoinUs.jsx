import { useContext } from "react";
import AccordionItem1 from "./elements/AccordionItem1";

import AccordionItem3 from "./elements/AccordionItem3";
import Theme from "../../Functions/themes/ThemeContext";
import PageHelmet from "../../Components/PageHelmet";
import metaAndOpengraphTag from "../../Functions/helm/metaAndOpengraphTag";
import AccordionItem2 from "./elements/AccordionItem2";
import saveAccordionID from "../../Functions/saveAccordionID";

const JoinUs = () => {

  const theme = useContext(Theme);


  return (
    <>
    <PageHelmet helmetObj ={metaAndOpengraphTag.joinUs}/>
    <div className="join-us-page">
      <div className="hero-img puzzle-hero-img">
      <h1 className="poz-center">Csatlakozz</h1>

      </div>
      <div className={`accordion accordion-flush ${theme}`} id="about-us-accordion" onClick={(event)=>saveAccordionID(event)}>

        <AccordionItem1/>
        <AccordionItem2 />
        <AccordionItem3/>



      </div>
    </div>
    </>
  );
};

export default JoinUs;
