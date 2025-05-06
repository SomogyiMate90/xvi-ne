import getAncorPhoneNume from "../../../Functions/Utils/getAncorPhoneNume";
import LinkOutTargetBlank from "../../../shared/LinkOutTargetBlank";


const AccordionKedvezmenyItem = ({doc}) =>{
    const {docId, data: { title, address, phoneNumber, link, text, description } } = doc;

      const splitedDescription = description?.split('\n');
  
      const descriptionParagraps = splitedDescription.filter(item=> item !== '');
  
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
              aria-controls={`#${docId}`}
            >
              {title}
            </button>
          </h2>
          <div
            id={`${docId}`}
            className="accordion-collapse collapse"
            data-bs-parent={`#${docId}`}
          >
            <div className="accordion-body">
              <p className="text-indent-no text-start">
                <strong>Cím:</strong> {address}
              </p>
              <p className="text-indent-no ">
                <strong>Leírás:</strong> {text}
              </p>
              <p className="text-indent-no text-start">
                <strong>Nyitvatartás:</strong> {descriptionParagraps.map((i,n)=>(<span className="d-block ms-5" key={n}>{i}</span>))}
              </p>
              <p className="text-indent-no text-start">
                <strong>Telefonszám:</strong>  {
                  phoneNumber !== 'Nincs telefonszám' ? <LinkOutTargetBlank link={{ href: ancorPhoneNum, text: phoneNumber }} /> : "Nincs"
                  
                  }
              </p>
              <p className="text-indent-no text-start">
                <strong className="">Weboldal címe:</strong>{" "}
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