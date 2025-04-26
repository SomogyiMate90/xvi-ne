import { useContext, useEffect } from "react";
import AccordionItem1 from "./elements/AccordionItem1";

import AccordionItem3 from "./elements/AccordionItem3";
import Theme from "../../Functions/themes/ThemeContext";
import PageHelmet from "../../Components/PageHelmet";
import metaAndOpengraphTag from "../../Functions/helm/metaAndOpengraphTag";
import AccordionItem2 from "./elements/AccordionItem2";

import saveAllAccordionStates from "../../Functions/saveAllAccordionStates";
import { restoreAllAccordionStates } from "../../Functions/restoreAllAccordionStates";
import AccordionItem4 from "./elements/AccordionItem4";

const JoinUs = () => {

  const theme = useContext(Theme);

  useEffect(() => {
    // Visszaállítjuk a sessionStorage-ben elmentett állapotokat
    restoreAllAccordionStates('about-us-accordion');
  }, []);


  return (
    <>
    <PageHelmet helmetObj ={metaAndOpengraphTag.joinUs}/>
    <div className="join-us-page">
      <div className="hero-img puzzle-hero-img">
      <h1 className="poz-center">Csatlakozz</h1>

      </div>
      <div className={`accordion accordion-flush ${theme}`} 
           id="about-us-accordion" 
           onClick={() => {
            setTimeout(() => {
              const el = document.getElementById('about-us-accordion');
              if (el) saveAllAccordionStates(el);
            }, 250); // várunk, hogy Bootstrap befejezze az animációt
          }}>

        <AccordionItem1/>
        <AccordionItem2 />
        <AccordionItem3/>
        <AccordionItem4/>



      </div>
    </div>
    </>
  );
};

export default JoinUs;
