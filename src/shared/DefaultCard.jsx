const DefaultCard = ({tag}) => {

    const {name, base64Url, picAlt } = tag;

  return (
    <div className="card flex-grow-0" style={{width: "18rem", height: "22rem"}}>
      <img src={base64Url} className="card-img-top" alt={`${picAlt} fotója`} />
      <div className="card-body">
        <h4>{name}</h4>

        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};

export default DefaultCard;
