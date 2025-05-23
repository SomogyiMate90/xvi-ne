import { useContext, useEffect } from "react";
import { useImmer } from "use-immer";
import FireStoreContext from "../../../Functions/contexts/fireSroreContext";
import addStatementCookie from "./functions/addStatementCookie";
import removeStatementCookie from "./functions/removeStatemenCookie";

const GDPRBOX = ({ setShowGDPRBox,setAnalizing}) => {
  const [description, setDescription] = useImmer(["Várakozás a tartalomra..."]);

  const fireContent = useContext(FireStoreContext);

  useEffect(() => {
    if (fireContent.gdpr) {
      const actualBox = fireContent.gdpr[0]?.data?.description;

      const contentList = actualBox.split("\n");
      const paragraphList = contentList.filter((i) => i !== "\n");

      setDescription(paragraphList);
    }
  }, [fireContent]);

  const handleHozzaJarulas = () =>{

    addStatementCookie('hozza_jarulva_');
    setAnalizing(true)
    setShowGDPRBox(false)
  }

  const handleElutasitas = () => {
    removeStatementCookie();
    setAnalizing(false);
    setShowGDPRBox(false)
    // kétszer renderelődik ezért a "kettő gomnyomás esetét váltom ki"
    setTimeout(()=>{
      setShowGDPRBox(false)
    },10)
  }

  

  return (
    <aside id="gdpr-statement" className="gdpr-aside">
      <div className="gdpr-box position-relative">
        <div className="accpet-main-button-box rounded-top-5 mt-3 pt-4 px-5 position-absolute bottom-100 end-0 me-5">
          <button onClick={handleHozzaJarulas} id="main-accept-gdpr-btn" className=" btn btn-success mb-3">
            Elfogadom
          </button>
        </div>
        <div className="linear-element"></div>
        <div className="gdpr-box-description">
          <h3 className="ms-2 mb-2 fs-4">Adatkezelési tájékoztató</h3>
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <div role="group" className="btn-group ms-lg-5">
            <button onClick={handleHozzaJarulas} className="btn btn-success">Elfogadom</button>
            <button onClick={handleElutasitas} className="btn btn-danger">Nem fogadom el</button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default GDPRBOX;
