import DefaultInput from "../../../../shared/DefaultInput";
import GetUploadedSections from "../Forms/GetUploadedSections"
import {  useState } from "react";
import { useImmer } from "use-immer";
import submitFunction from "./handleSubmit";


const Kedvezmenyek = ( {eventModify, collectionName , docs }) =>{
    const [formKey, setFormKey] = useState(0);
    const { changedEvent, setChangedEvent } = eventModify;
    const [inputValues , setInputValues] = useImmer({})
   
    /**
     * 
     * @param {Event} event 
     */
    const handleSubmit = async (event) =>{
        event.preventDefault();
        const resp = await submitFunction(event,collectionName)

        if(resp === 'Sikeres feltöltés'){
            setChangedEvent(!changedEvent);
            setInputValues({});
            setFormKey(formKey+1);
        }
        else{
            alert('A felötltés során hiba keletkezett, probáld meg ismét')
        }
    }

    const field1 = { id: "name", 
                     required: true, 
                     placeholder: "írd ide a cég nevét",
                     className : 'form-control text-success' }

    const field2 = {    id: "address", 
                        required: true, 
                        placeholder: "A cég címe",
                        className : 'form-control text-success' }

    const field3 = {    id: "description", 
                        required: true, 
                        placeholder: "Írd le a kedvezmény mértékét",
                        className : 'form-control text-success' }      

    const field4 = {    id: "phoneNumber", 
                        placeholder: "Telefonszám",
                        className : 'form-control text-success',
                        minLength : 10
                        }     
                        
    const field5 = {    id: "link", 
                        placeholder: "Másold be az oldal linkjét",
                        className : 'form-control text-success' }       

    const field6 = {    id: "docId", 
                        className : 'form-control text-success text-black',
                        readOnly: true,
                        disabled: true, }                     

    return(
        <div className="kedvezmenyek">
            <h2 className="text-center">Tölts ki az adatlapot</h2>
                <DefaultInput defaultValue={inputValues?.docId ?? ''} labelText='Dokumentum azonosító' inputProps={field6}/>
            <form key={formKey} onSubmit={handleSubmit} className="mb-3">

                <DefaultInput defaultValue={inputValues?.data?.name ?? ''} labelText='Név' inputProps={field1}/>
                <DefaultInput defaultValue={inputValues?.data?.address ?? ''} labelText='Cím' inputProps={field2}/>
                <DefaultInput defaultValue={inputValues?.data?.description ?? ''} labelText='Leírás' inputProps={field3}/>
                <DefaultInput defaultValue={inputValues?.data?.phoneNumber ?? ''} labelText='Telefonszám' inputProps={field4}/>
                <DefaultInput defaultValue={inputValues?.data?.link ?? ''} labelText='Az oldal linkje' inputProps={field5}/>

                
                <div className="d-flex justify-content-evenly">
                    <button className="btn btn-success" type="submit">Adatfeltöltés / Módosítása</button>
                    <button onClick={()=>{setFormKey(formKey+1);setInputValues({})}} className="btn btn-warning" type="button">Új űrlap</button>
                </div>
            </form>
            <hr />
            <GetUploadedSections setInputValues={setInputValues} eventModify={eventModify} collectionName={collectionName} docs={docs} />
        </div>
    )
}

export default Kedvezmenyek;