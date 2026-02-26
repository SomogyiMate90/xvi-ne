import 'animate.css';
import { useContext, useEffect } from "react";
import animateSliderPanel from "../Functions/animateSliderPanel";
import FireStoreContext from "../Functions/contexts/fireSroreContext";
import SliderPanelCardSlider from "./elements/SliderPanelCardSlider";

const SliderPanel = ({ classStyle, displaysListArray = [] }) => {
  const fireBaseContent = useContext(FireStoreContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  let elements = [];

  displaysListArray.forEach(list=>{

    const targetArray = fireBaseContent?.[list];

    if (Array.isArray(targetArray)) {
      elements.push(...targetArray);
    }

  })

  // const elements = fireBaseContent[displaysListArray];

  useEffect(() => {
    if (elements && elements.length > 0) {
      animateSliderPanel();
    }
  }, [elements]);

  return (
    <aside id="slider-panel" className={`slider-panel ${classStyle}`}>
      {elements && elements.length > 0 ? (
        <SliderPanelCardSlider receivedArray={elements} />
      ) : (
        <img className="loading-gif" src="/assets/img/loadingGIF.gif" alt="Várakozás a tartalomra"/>
      )}
    </aside>
  );
};

export default SliderPanel;