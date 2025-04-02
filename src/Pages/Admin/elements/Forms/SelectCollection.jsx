
const SelectCollcetion = ({collectOp,setCollection}) =>{

/**
 * 
 * @param {Event} event 
 */
    const readValue = (event) =>{
        setCollection(event.target.value)
    }

    return(
        <div className="mb-3">
        <select onChange={(event)=>readValue(event)} className="form-select" name="collections" id="collections" required>
            <option value="">Jelöld kí a kívánt aloldalt, amit szerkeszteni szeretnél</option>

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