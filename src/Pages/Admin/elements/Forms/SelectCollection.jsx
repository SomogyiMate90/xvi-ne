
const SelectCollcetion = ({collectOp,setLoading,setCollection}) =>{

/**
 * 
 * @param {Event} event 
 */
    const readValue = (event) =>{
        setCollection(event.target.value);
        setLoading(false)
    }

    const emptyCollections = () =>{
        setCollection(false);
        setLoading(true)
    }

    return(
        <div className="mb-3">
        <select onChange={(event)=>readValue(event)} className="form-select" name="collections" id="collections" required>
            <option onClick={emptyCollections} value="">Jelöld kí a kívánt aloldalt, amit szerkeszteni szeretnél</option>

            {
                collectOp.map((item,index)=>{
                    return(<option key={index} value={item}>{item}</option>)
                })
            }
        </select>
        </div>
    )
}
export default SelectCollcetion;