import { useContext, useEffect, useState } from "react";
import DefaultCard from "../shared/DefaultCard";
import { useImmer } from "use-immer";
import { getFIRESOTER_content } from "../Functions/firebase/getFIRESOTER_content";
import Theme from "../Functions/themes/ThemeContext";
import FireStoreContext from "../Functions/contexts/fireSroreContext";

const Vezetoseg = ({ btnTitle = "Elnökség" }) => {
  const [cardDatas, setCardDatas] = useImmer([]);
  const [openFirstBtn, setOpenFirstBtn] = useState(null)

  const theme = useContext(Theme);
  const fireBaseContent = useContext(FireStoreContext);

  useEffect(() => {
    if (fireBaseContent.elnokseg) {
      try{
        import("bootstrap/js/dist/offcanvas.js");
        /**
         * @type {Array}
         */
        const elnokseg = fireBaseContent.elnokseg;
    
        if (elnokseg.length < 1) throw new Error('Nincs megjeleníthető adat...');
        const rendezettVezetoseg = [...elnokseg].sort((a, b) => {
          return Number(a.data.rendezes) - Number(b.data.rendezes);
        });
    
        setCardDatas(rendezettVezetoseg);
      }
      catch(e){
        console.warn('Hiba az elnökség komponensben...', e);
        return
      }
    }
  }, [fireBaseContent]);

  return (
    <>
      <button
        className="btn btn-info mb-3"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#elnoksegCanvas"
        aria-controls="elnoksegCanvas"
        onClick={()=>setOpenFirstBtn(true)}
      >
        {btnTitle}
      </button>

      <div
        className={`offcanvas offcanvas-start w-lg-75 ${theme}`}
        data-bs-backdrop="static"
        tabIndex="-1"
        id="elnoksegCanvas"
        aria-labelledby="staticBackdropLabel"
      >
        <div className="offcanvas-header">
          <h3 className="offcanvas-title" id="staticBackdropLabel">
            Elnökség
          </h3>
          <button
            type="button"
            className="btn btn-close red"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-flex gap-4 flex-wrap justify-content-evenly">
          {(cardDatas.length === 0 || openFirstBtn === null) ? (
            <img
              style={{ width: "30px", height: "30px" }}
              src="/assets/img/loadingGIF.gif"
              alt="Kép töltésről"
            />
          ) : (
            cardDatas.map((item) => {
              const { data, docId } = item;
              return <DefaultCard key={docId} docId={docId} tag={data} />;
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Vezetoseg;
