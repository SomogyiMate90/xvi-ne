import LinkOutTargetBlank from "./LinkOutTargetBlank";
import ImgFromStorage from "./hook/ImgFromStorage";

const DefaultCard = ({tag, docId}) => {

    const {name,  picAlt, beosztas, phoneNumber, email } = tag;

    //  nagykép : "1920x1280"

  return (
    <div className="card" style={{width: '18rem', height: '34rem' }}>
      <ImgFromStorage 
      storageProps={{folderPath : `elnokseg/mainPic/${docId}`,namePart:'400x267', picAlt }}
      classProps="card-img-top h-75 object-fit-contain  border rounded"
        />
      <div className="card-body">
        <h4 className="text-center">{name ?? 'Nincs név'}</h4>
        <p className="text-uppercase text-end fw-bold">{beosztas ?? 'nincs beosztás'}</p>
        <p className="card-text">   
        {phoneNumber && (<p className="mb-1"><LinkOutTargetBlank myStyle="text-wrap text-center" link={{href: phoneNumber, text: phoneNumber }}/></p>)}
        {email  && (<LinkOutTargetBlank myStyle="text-wrap text-center" link={{href: email, text: email }}/>)}

        </p>
      </div>
    </div>
  );
};

export default DefaultCard;
