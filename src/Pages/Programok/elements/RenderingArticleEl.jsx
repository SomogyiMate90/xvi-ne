import CalendarBTN from "../../../shared/CalendarBTN";
import DefaultFigure from "../../../shared/DefaultFigure";
import ImgHTML from "../../../shared/ImgHTML";
import MapBtn from "../../../shared/MapBtn";
import ArticleElements from "./ArticleElements";

const RenderingArticleEl = ({docId,doc}) =>{

    const { address, highPicture, picAlt, description, title  } = doc;

    const splitedDescription = description.split('\n');
  
    const descriptionParagraps = splitedDescription.filter(item=> item !== '');

    return(
        <div key={docId} className="page-article d-flex flex-column align-items-center">
        <div className="icon-box d-flex align-self-end gap-2">
        <CalendarBTN  event={doc} />
        <MapBtn address={address}/>
        </div>

        <h1>{title}</h1>
        <div className="clearfix">
          <DefaultFigure props={{imgAlt: picAlt}}  classStyle='p-0 p-lg-2 ps-xl-4 float-xl-end mb-2'>
          <ImgHTML src={highPicture?.url}  picAlt={picAlt}/>
          </DefaultFigure>
          <div className="descriptions">{descriptionParagraps.map((i,n)=>(<p key={n}>{i}</p>))}</div>
        </div>
        <div className="clear-fix"></div>
        <ArticleElements docContent={doc} />
      </div>

    )
}

export default RenderingArticleEl;