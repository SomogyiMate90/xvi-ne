import LinkOutTargetBlank from "./LinkOutTargetBlank";

const DefaultCard = ({tag}) => {

    const {name, base64Url, picAlt, beosztas, phoneNumber, email } = tag;

  return (
    <div className="card" style={{width: '23rem', minheight: '26rem', maxHeight: '32rem' }}>
      <img src={base64Url ?? '/assets/img/no-img.png'} className="card-img-top" alt={`${picAlt ?? '' } fotója`} />
      <div className="card-body">
        <h4 className="text-center">{name ?? 'Nincs név'}</h4>
        <p className="text-uppercase text-end fw-bold">{beosztas ?? 'nincs beosztás'}</p>
        <p className="card-text">   
        {phoneNumber && (<span><LinkOutTargetBlank link={{href: phoneNumber, text: phoneNumber }}/></span>)}
        {email  && (<LinkOutTargetBlank link={{href: email, text: email }}/>)}

        </p>
      </div>
    </div>
  );
};

export default DefaultCard;
