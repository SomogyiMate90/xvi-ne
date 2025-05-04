import { pictureIcon } from "../../../Functions/themes/icons";
import getShortedText from "../../../Functions/Utils/getShortedText";
import ImgHTML from "../../../shared/ImgHTML";
import LinkBTN from "../../../shared/LinkBTN";

const CardFolder = ({docId,data}) => {

  const {title ,  picAlt , description, fileSzam, date, titleUrl, highPicture } = data;

  const splitedDescription = description.split('\n');
  const descriptionParagraps = splitedDescription.filter(item=> item !== '');
  const shortedDescription = getShortedText(descriptionParagraps,160)

  const now = Date.now()
  const szerkesztve = new Date(date).getTime();
  const kulonbseg = now - szerkesztve;
  const dayLeft = Math.floor(kulonbseg / (1000 * 60 * 60 * 24))

  const napok =`szerkesztve: ${dayLeft} napja`;
  
  let honap;

  if(dayLeft > 35){
    honap = `Szerkesztve: ${Math.floor(napok / 30)} hónapja`
  }

  return (
    <div id={docId} className="card text-bg-dark position-relative">
        <div className="picture-count-icon">
        <span>{pictureIcon}

        </span>
            <span>
            {fileSzam}
            </span>
        </div>
        <ImgHTML src={highPicture.url} picAlt={picAlt} />    
      <div className="card-img-overlay">
        <h4 className="card-title">{title || '' }</h4>
        {
                 shortedDescription.map((i,n)=>(<p className="card-text" key={n}>{i}</p>))
                }
        <p className="card-text d-inline">
          <small>{honap ?? napok}</small>
        </p>

      <LinkBTN anStyle='postion-galery-btn' 
                text='Tovább olvasom'
                url={`${titleUrl}`}/>

      </div>
    </div>
  );
};
export default CardFolder;
