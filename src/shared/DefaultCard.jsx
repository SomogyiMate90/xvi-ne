import ImgHTML from "./ImgHTML";
import InlineLink from "./InlineLink";
import LinkOutTargetBlank from "./LinkOutTargetBlank";

const DefaultCard = ({tag, docId}) => {

    const {name,  picAlt, beosztas, phoneNumber, email, highPicture } = tag;

    //  nagykép : "1920x1280"

  return (
    <div className="card" style={{width: '18rem', height: '34rem' }}>
      <ImgHTML style="card-img-top h-75 object-fit-contain  border rounded" src={highPicture?.url} picAlt={picAlt}/> 
      <div className="card-body">
        <h4 className="text-center">{name ?? 'Nincs név'}</h4>
        <p className="text-uppercase text-end fw-bold">{beosztas ?? 'nincs beosztás'}</p>
        <p className="card-text">   
        {phoneNumber && (<p className="mb-1"><LinkOutTargetBlank myStyle="text-wrap text-center" link={{href: phoneNumber, text: phoneNumber }}/></p>)}
        {email  && (<InlineLink myStyle='text-pirmary'  to={`mailto:${email}`}>{email}</InlineLink>)}
        </p>
      </div>
    </div>
  );
};

export default DefaultCard;
