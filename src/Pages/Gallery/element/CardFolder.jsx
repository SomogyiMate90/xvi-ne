
import { pictureIcon } from "../../../Functions/themes/icons";
import getShortedText from "../../../Functions/Utils/getShortedText";
import ImgFromStorage from "../../../shared/hook/ImgFromStorage";
import LinkBTN from "../../../shared/LinkBTN";

const CardFolder = ({docId,data}) => {

  const {title , base64Url, picAlt , description, fileSzam, date, titleUrl } = data;

  const splitedDescription = description.split('\n');
  const descriptionParagraps = splitedDescription.filter(item=> item !== '');
  const shortedDescription = getShortedText(descriptionParagraps,160)
  const defaultImageUrl = '/assets/img/no-img.png'

  const now = Date.now()
  const szerkesztve = new Date(date).getTime();
  const kulonbseg = now - szerkesztve;

  const napok =`szerkesztve: ${Math.floor(kulonbseg / (1000 * 60 * 60 * 24))} napja`;
  
  let honap;

  if(napok > 35){
    honap = `Szerkesztve: ${Math.floor(napok / 30)} hónapja`
  }

  return (
    <div className="card text-bg-dark position-relative">
        <div className="picture-count-icon">
        <span>{pictureIcon}

        </span>
            <span>
            {fileSzam}
            </span>
        </div>

        <ImgFromStorage storageProps={{folderPath : `galeria/mainPic/${docId}`, namePart : '1920x1280', picAlt}}  />
    
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
