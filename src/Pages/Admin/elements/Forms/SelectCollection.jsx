import { useState } from "react";

const SelectCollcetion = ({collectOp,setLoading,setCollection}) =>{
const [isSelectedAny, setSelectedAny] = useState('form-select')
/**
 * 
 * @param {Event} event 
 */
    const readValue = (event) =>{
        setCollection(event.target.value); 

        event.target.value !== '' ? setSelectedAny('form-select bg-success text-white fw-bold') : setSelectedAny('form-select')

        setLoading(false)
    }

    const emptyCollections = () =>{
        setCollection(false);
        setLoading(true)
    }

    return(
        <div className="mb-3">
        <select onChange={(event)=>readValue(event)} className={isSelectedAny} name="collections" id="collections" required>
            <option onClick={emptyCollections} value="" className="bg-primary-subtle text-dark" >Válasz a szerkeszteni kívánt témakörök közül</option>

            {
                collectOp.map((item,index)=>{
                    return(<option  key={index} value={item}>{item}</option>)
                })
            }
        </select>
        </div>
    )
}
export default SelectCollcetion;