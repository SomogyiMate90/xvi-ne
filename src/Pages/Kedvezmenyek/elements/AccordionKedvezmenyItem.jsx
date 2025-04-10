import getAncorPhoneNume from "../../../Functions/Utils/getAncorPhoneNume";
import LinkOutTargetBlank from "../../../shared/LinkOutTargetBlank";


const AccordionKedvezmenyItem = ({doc}) =>{
    const {
        docId,
        data: { title, address, phoneNumber, link, text },
      } = doc;
  
      let ancorPhoneNum = null;
          if(phoneNumber !== 'Nincs telefonszám') {
            ancorPhoneNum = getAncorPhoneNume(phoneNumber);
          }


      return (
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${docId}`}
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              {title}
            </button>
          </h2>
          <div
            id={`${docId}`}
            className="accordion-collapse collapse"
            data-bs-parent="#kedzvezmenyek-accordion"
          >
            <div className="accordion-body">
              <p>
                <strong>Cím:</strong> {address}
              </p>
              <p>
                <strong>Leírás:</strong> {text}
              </p>
              <p>
                <strong>Telefonszám:</strong>  {
                  phoneNumber !== 'Nincs telefonszám' ? <LinkOutTargetBlank link={{ href: ancorPhoneNum, text: phoneNumber }} /> : "Nincs"
                  
                  }
              </p>
              <p>
                <strong>Weboldal címe:</strong>{" "}
                {link ? (
                  <LinkOutTargetBlank link={{text : link, href : link}}/>
                ) : (
                  "nincs megadva"
                )}
              </p>
            </div>
          </div>
        </div>
      );
}

export default AccordionKedvezmenyItem;