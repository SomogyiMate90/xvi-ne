import { useContext } from "react";
import Theme from "../../../Functions/themes/ThemeContext";
import AccordionKedvezmenyItem from "./AccordionKedvezmenyItem";

const MobilViewKedvezmenyek = ({ kedv }) => {
  const theme = useContext(Theme);

 
  return (
    <div className={`accordion ${theme} d-xl-none`} id="kedzvezmenyek-accordion">
      {kedv.map((item, index) => {
        return <AccordionKedvezmenyItem key={index} doc={item} />;
      })}
    </div>
  );
};

export default MobilViewKedvezmenyek;
