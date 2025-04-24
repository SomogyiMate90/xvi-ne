import MapBtn from "../../../shared/MapBtn";
import PhotoBook from "../../../shared/PhotoBook";

const GalleryEventArticle = ({article}) =>{

/** 
 * @type {{ docId: string, data: ArticleData }}
 * 
 * @typedef {Object} ArticleData
 * @property {string} description
 * @property {string} title
 * @property {string} address
 * @property {string} base64Url
 * @property {string} date
 * @property {number} fileSzam
 * @property {string} picAlt
 */
    const { docId, data : { address , base64Url, description,  picAlt, title }  } = article
    
    const splitedDescription = description.split('\n');

    const paragraphs = splitedDescription.reduce((acc,item,index)=>{
        if(item !== '\n'){
            acc.push(item)
        }
        return acc;
    },[]);

    return(
        <>
            <h1>{title}</h1>
            <div className="d-flex d-lg-block flex-column aling-items-center">
                { base64Url === '' ? <></> : 
                <figure className="m-1 m-lg-2 float-end">
                    <img className="d-block mx-auto object-fit-contain w-75" src={base64Url} alt={picAlt || 'borítókép'} />
                    <figcaption className="text-center fst-italic">{picAlt}</figcaption>
                </figure>
                }
                <div className="paragraps">{paragraphs.map((i,n)=>(<p key={n}>{i}</p>))}</div>
            </div>
            <div className="clearfix">
                {address &&  (<div className="d-flex gap-2"><p className="d-inline-block"><b>Helyszín: {address}</b></p> <MapBtn address={address}/></div>)} 
            </div>
            <PhotoBook folderPath={`galeria/${docId}`} />    
        </>
    )

}
export default GalleryEventArticle;