import { useContext, useEffect } from "react";
import FireStoreContext from "../Functions/contexts/fireSroreContext";
import { useImmer } from "use-immer";
import LinkOutTargetBlank from "../shared/LinkOutTargetBlank";
import { href } from "react-router-dom";
import ImgFromStorage from "../shared/hook/ImgFromStorage";
import animateSliderPanel from "../Functions/animateSliderPanel";

const Tamogatok = () =>{
    const fireStoreData = useContext(FireStoreContext); 

    // console.log(fireStoreData)

    // const elements = fireStoreData.partnerek;
    
    // useEffect(() => {
    //     if (elements && elements.length > 0) {
    //         console.log(elements)
    //     // animateSliderPanel('partnerek-lists');
    //   }
    // }, [elements]);

    return(


    //     <aside className="partnerek-aside">
    //     <h2 className="text-center fs-4">Támogatóink</h2>






    //     {/* <ul className="d-flex _Partrnerek.scss">  */}
    //         {
    //             fireStoreData.length === 0 ? <img src="/assets/img/no-img.png"/> : fireStoreData.partnerek.map(( item,index)=>{
                    
    //                 const {data, docId} = item;
                    
    //                 const {picAlt ,  title , url} = data;
                    
    //                 console.log(item)
                    
    //                 return(
                        
                    

    //                     <ul id="partnerek-lists" key={docId}  className="animate__animated animate__bounce animate__delay-2s">
    //                         <li>
    //                             <a href={url} rel="noopener noreferrer" target="_blank">
    //                                                        <ImgFromStorage storageProps={{folderPath: `/partnerek/mainPic/${docId}`, namePart : '400x267', picAlt  }} classProps='' />
    //                             </a>
    //                         </li>
    //                         </ul>
    //                     )
    //             })
    //         }
   

    // </aside>











        <aside className="partnerek-aside">
            <h2 className="text-center fs-4">Támogatóink</h2>

            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">




            {/* <ul className="d-flex _Partrnerek.scss">  */}
                {
                    fireStoreData.length === 0 ? <img src="/assets/img/no-img.png"/> : fireStoreData.partnerek.map(( item,index)=>{
                        
                        const {data, docId} = item;
                        
                        const {picAlt ,  title , url} = data;
                        
                        console.log(item)
                        
                        return(
                            
                        

                            <div key={docId}  class={index === 0  ? " carousel-item active" : "carousel-item" }>
                                <a href={url} rel="noopener noreferrer" target="_blank">
                               <ImgFromStorage storageProps={{folderPath: `/partnerek/mainPic/${docId}`, namePart : '400x267', picAlt  }} classProps='' />
                                </a>
                                </div>
                            )
                    })
                }
            
            {/* </ul> */}
                                </div>
                              </div>    

        </aside>
    )
}

export default Tamogatok;