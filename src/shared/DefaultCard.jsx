import LinkOutTargetBlank from "./LinkOutTargetBlank";

const DefaultCard = ({tag}) => {

    const {name, base64Url, picAlt, beosztas, phoneNumber, email } = tag;

  return (
    <div className="card" style={{width: '18rem' }}>
      <img src={base64Url === '' ?('/assets/img/no-img.png') : base64Url} className="card-img-top h-75 object-fit-scale border rounded"  alt={`${picAlt ?? '' } fotója`} />
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
