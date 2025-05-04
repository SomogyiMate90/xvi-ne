import getShortedText from "../../Functions/Utils/getShortedText";
import ImgFromStorage from "../../shared/hook/ImgFromStorage";
import LinkBTN from "../../shared/LinkBTN";


const SliderPanelCardSlider = ({receivedArray}) =>{

    if(!(Array.isArray(receivedArray))) return;

    return(
       <>
                
        {
            receivedArray.map(({docId, data},index)=>{
                
                const splitedDescription = data?.description.split('\n');
  
                const descriptionParagraps = splitedDescription.filter(item=> item !== '');
      
                const shortedDescription = getShortedText(descriptionParagraps,240)

                

                return(

                    <div  key={docId} className="d-none article-slider animate__animated">
                   <div className="">
                    <img src={data?.highPicture?.url || '/assets/img/no-img.png'} alt={data.picAlt}/>
                    {/* <ImgFromStorage storageProps={{folderPath : `/programok/mainPic/${docId}`, namePart: '1920x1280', picAlt : data.picAlt }} /> */}
                    </div>
                   
                    <section className="">
                        <h3 className="">{data?.title} </h3>
                        <div className="description">
                        {
                            shortedDescription.map((i,n)=>(<p className="" key={n}>{i}</p>))
                        }
                        </div>
                    </section>
                    <LinkBTN anStyle="text-end me-4" classStyle="btn btn-info" text="Tovább a cikkhez" url={`programok/${data?.titleUrl}`}/> 
                </div>
                )
            })
        }
        </>

    )



}

export default SliderPanelCardSlider;