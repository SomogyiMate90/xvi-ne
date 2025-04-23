import { useState } from "react";
import DefaultInput from "./DefaultInput";

const DefaultInputImg = ({title,handleFun}) =>{

    const [mustAltImg, setAltImg] = useState(false);

    /**
     * 
     * @param {Event} event 
     */
    const handleChechFile = (event) =>{

        const file = event.target.files;

        if(file.length > 0 ){
            handleFun(event)
            setAltImg(true)
        }
        else{
            setAltImg(null)
        }


    }


    return(
            <fieldset className="border border-1 border-danger rounded-2 p-2">
        <div className="mb-3">
            <label htmlFor="picture">{title || 'Fényképfeltöltés max 1 db'}</label>
            <input 

                id="picture"
                name="picture" 
                className = 'form-control text-danger mb-2'
                type="file"
                accept=".jpg, .jpeg, .png"
                onChange={(event)=>handleChechFile(event)}
                
            />
            {
                mustAltImg && ( <DefaultInput 
                                    labelText='( Mi látható a képen? )' 
                                    inputProps={{id:'picAlt', 
                                                 required : true,
                                                 className :'form-control text-danger',
                                                 placeholder: 'Az ide írt szöveg jelenik meg ha nem töltődik be a kép'
                                                }} />)
            }
           
        </div>
           </fieldset>
    )
}
export default DefaultInputImg;