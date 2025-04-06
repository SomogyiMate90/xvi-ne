
import { pictureIcon } from "../../../Functions/themes/icons";
import LinkBTN from "../../../shared/LinkBTN";

const CardFolder = ({LoremId,text}) => {

    const {title , paragraph , time } = text

    const loremUrl = `https://picsum.photos/id/${LoremId[0]}/200/300`
    const defaultImageUrl = 'public/assets/img/camera-no-pic.png'

  return (
    <div className="card text-bg-dark position-relative">
        <div className="picture-count-icon">
        <span className="" >{pictureIcon}

        </span>
            <span className="">
            {LoremId.length}
            </span>


        </div>

      <img src={loremUrl} 

      className="card-img" 
      alt="..." />
      <div className="card-img-overlay">
        <h5 className="card-title">{title || '' }</h5>
        <p className="card-text">
          {paragraph[0]}
        </p>
        <p className="card-text">
          <small>{`${time.getFullYear()}.${String(time.getMonth()+1).padStart(2,'0')}.${String(time.getDate()).padStart(2,'0')} `}</small>
        </p>
      <LinkBTN text='Tovább olvasom'/>
      </div>
    </div>
  );
};
export default CardFolder;
