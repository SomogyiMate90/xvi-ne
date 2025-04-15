import { useContext } from "react";
import FireStoreContext from "../../../Functions/contexts/fireSroreContext";
import DefaultCard from "../../../shared/DefaultCard";

const Vezetoseg = () =>{

    
    const fireBaseContent = useContext(FireStoreContext);
    /**
     * @type {Array}
     */
    const elnokseg = fireBaseContent.elnokseg;

    const shortedElnokseg = elnokseg?.sort((a,b)=>{
      return  Number(a?.data?.rendezes)-Number(b?.data?.rendezes)
    })


    return(
        <>
        <button className="btn btn-info mb-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
        Elnökség
</button>

<div className="offcanvas offcanvas-start w-75" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div className="offcanvas-header">
    <h3 className="offcanvas-title" id="staticBackdropLabel">Elnökség</h3>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body d-flex gap-2 ">
    
        {
          shortedElnokseg?.map((item,index)=>{
                const {data, docId} = item;

                console.log('Lefutott a kártya készítés')
                return(
                <DefaultCard key={docId} tag={data} />
            )
        })
        }
   
  </div>
</div>
</>
    )
}

export default Vezetoseg;