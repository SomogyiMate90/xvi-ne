import PageHelmet from "../../../Components/PageHelmet";
import ImgHTML from "../../../shared/ImgHTML";
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
 * @property {Object} lowPicture
 */
    const { docId, data : { address , base64Url, description,  picAlt, title, lowPicture  }  } = article;

    
    const splitedDescription = description.split('\n');

    const paragraphs = splitedDescription.reduce((acc,item,index)=>{
        if(item !== '\n'){
            acc.push(item)
        }
        return acc;
    },[]);

    const helmetObj = {metaNameObj: { title: `NOE XVI. - ${title}`,
    description: `${description.slice(0,154).replaceAll('\n',' ')}`,
    keywords: ` képek,galéria, ${title || ''}, ${address || 'xvi. kerület'}, fotógaléria,  események, programok, kirándulás, családi rendezvények,beszámoló`,
    robots: "index,follow"
}}

    return(
        <>
         <PageHelmet helmetObj={helmetObj}/>
            <h1>{title}</h1>
            <div className="d-flex d-lg-block flex-column aling-items-center">
                { base64Url === '' ? <></> : 
                <figure style={{maxWidth: '450px', width: '100%'}} className="border border-3  pb-1 rounded-2  my-2 mx-auto ms-lg-4 float-end">
                    <ImgHTML src={lowPicture?.url} picAlt={picAlt} />
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