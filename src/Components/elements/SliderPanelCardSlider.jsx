import getShortedText from "../../Functions/Utils/getShortedText";
import LinkBTN from "../../shared/LinkBTN";


const SliderPanelCardSlider = ({receivedArray}) =>{

    if(!(Array.isArray(receivedArray))) return;

    console.log('belépett')

    



    return(
       <>
                
        {
            receivedArray.map(({docId, data},index)=>{
                
                const splitedDescription = data?.description.split('\n');
  
                const descriptionParagraps = splitedDescription.filter(item=> item !== '');
      
                const shortedDescription = getShortedText(descriptionParagraps,240)

                

                return(
                    
                    <div  key={docId} className="d-none d-xl-row p-1 d-flex flex-column gap-3  justify-content-evenly flex-md-row align-content-center animate__animated">
                        {
                          data?.base64Url && (<div className="d-flex col-xl-5 justify-content-center"><img   src={data?.base64Url} alt={data?.picAlt} /></div>)
                        }
                        <section className="col-xl-7 flex flex-column justify-content-evenly">
                            <h3 className="mb-0 mt-2 text-center">{data?.title} </h3>
                            <div className="description">
                            {
                                shortedDescription.map((i,n)=>(<p className="mb-0" key={n}>{i}</p>))
                            }
                            </div>
                        <LinkBTN classStyle="btn btn-info" text="Tovább a cikkhez" url={`programok/${data?.titleUrl}`}/> 
                        </section>
                    </div>
                )
            })
        }
        </>

    )



}

export default SliderPanelCardSlider;