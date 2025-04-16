import { useContext, useEffect } from "react";
import Theme from "../../../Functions/themes/ThemeContext";
import AccordionKedvezmenyItem from "./AccordionKedvezmenyItem";
import saveAllAccordionStates from "../../../Functions/saveAllAccordionStates";
import { restoreAllAccordionStates } from "../../../Functions/restoreAllAccordionStates";


const MobilViewKedvezmenyek = ({ kedv }) => {
  const theme = useContext(Theme);

  useEffect(()=>{
    restoreAllAccordionStates('kedzvezmenyek-accordion')
  },[]);

 
  return (
    <div className={`accordion ${theme} d-xl-none`} 
        id="kedzvezmenyek-accordion"
            onClick={() => {
                    setTimeout(() => {
                      const el = document.getElementById('kedzvezmenyek-accordion');
                      if (el) saveAllAccordionStates(el);
                    }, 250); // várunk, hogy Bootstrap befejezze az animációt
                  }}
        >
      {kedv.map((item, index) => {
        return <AccordionKedvezmenyItem key={index} doc={item} />;
      })}
    </div>
  );
};

export default MobilViewKedvezmenyek;
