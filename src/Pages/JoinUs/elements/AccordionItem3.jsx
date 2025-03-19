import DownLoadBTN from "../../../Components/DownLoadBTN";

const AccordionItem3 = () =>{
    return(
        <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse3" aria-expanded="false" aria-controls="flush-collapse3">
        Belépési nyilatkozat
          </button>
        </h2>
        <div id="flush-collapse3" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            <p>Az egyesületbe rendes tagnak,pártoló tagnak és tiszteletbeli tagnak jelentkezni az alábbi nyilatkozat kitöltésével lehet!</p>

            <p><b>Dokumentumok letöltése:</b> <br /><br />
            
            <DownLoadBTN
                    text='Belépési nyilatkozat'
                    classNameText='btn btn-primary item-aligin-right'
                    funcionArgs={{
                            eleresiUt : '/documents/belepesi-nyilatkozat.doc',
                            addfileName: 'belépési-nyilatkozat.docx'
                        }}
                />     
            
           </p>

          </div>
        </div>
      </div>
    )
}

export default AccordionItem3;