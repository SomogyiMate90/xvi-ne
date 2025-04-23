import DownLoadBTN from "../../../Components/DownLoadBTN";
import NyilatkozatokBTNGroup from "../../../Components/NyilatkozatokBTNGroup";

const AccordionItem3 = () =>{
    return(
        <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse3" aria-expanded="false" aria-controls="flush-collapse3">
        Belépési nyilatkozat
          </button>
        </h2>
        <div id="flush-collapse3" className="accordion-collapse collapse" data-bs-parent="#about-us-accordion">
          <div className="accordion-body">
            <p>Az egyesületbe rendes tagnak,pártoló tagnak és tiszteletbeli tagnak jelentkezni az alábbi nyilatkozat kitöltésével lehet!</p>

            <p><b>Dokumentumok letöltése:</b></p>
            <NyilatkozatokBTNGroup/>

          </div>
        </div>
      </div>
    )
}

export default AccordionItem3;