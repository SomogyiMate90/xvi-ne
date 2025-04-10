import { useContext } from "react"
import FireStoreContext from "../../../Functions/contexts/fireSroreContext";
import TableKedvezmenyek from "./TableKedvezmenyek";
import MobilViewKedvezmenyek from "./MobilViewKedvezmenyek";


const XVIKeruletiKedv = () =>{

    const fireStoreContent = useContext(FireStoreContext)

    const kedv = fireStoreContent.kedvezmenyek;

    let sortedKedv = [];

/**
 * @type {Array}
 */
    if(kedv !== undefined && kedv.length > 0){
        sortedKedv = kedv.sort((a,b)=>{
            const nameA = a.data.title.toLowerCase();
            const nameB = b.data.title.toLowerCase();

            return nameA.localeCompare(nameB);
        })
    }
   
    return(
        <section>
            <h2>XVI. kerületi kedvezmények</h2>
            {
            kedv === undefined ? <img className="loading-gif" src="/assets/img/loadingGIF.gif" alt="Várakozás a tartalomra"/> : 
            
            <>
                {/* Asztali nézet */}
                <TableKedvezmenyek kedv={sortedKedv} />
                {/*Mobilnézet  */}
                <MobilViewKedvezmenyek kedv={sortedKedv}/>
            </>
            }
        </section>
    )
}
export default XVIKeruletiKedv;