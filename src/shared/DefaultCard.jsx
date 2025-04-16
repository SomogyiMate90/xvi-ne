import LinkOutTargetBlank from "./LinkOutTargetBlank";

const DefaultCard = ({tag}) => {

    const {name, base64Url, picAlt, beosztas, phoneNumber, email } = tag;

  return (
    <div className="card flex-grow-0" style={{width: "18rem", height: "22rem"}}>
      <img src={base64Url} className="card-img-top" alt={`${picAlt} fotója`} />
      <div className="card-body">
        <h4 className="text-center">{name}</h4>
        <p className="text-uppercase text-end fw-bold">{beosztas}</p>
        <p className="card-text">   
        {phoneNumber && (<span><LinkOutTargetBlank link={{href: phoneNumber, text: phoneNumber }}/></span>)}
        {email  && (<span >{email}</span>)}

        </p>
      </div>
    </div>
  );
};

export default DefaultCard;
