import DefaultInput from "../../../../shared/DefaultInput";
import GetUploadedSections from "../Forms/GetUploadedSections"
import {  useState } from "react";
import { useImmer } from "use-immer";
import submitFunction from "./handleSubmit";
import BtnGroup from "../Forms/BtnGroup";
import * as form from './formsFileds'


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

    return(
        <div className="kedvezmenyek">
            <h2 className="text-center">Tölts ki az adatlapot</h2>
                <DefaultInput defaultValue={inputValues?.docId ?? ''} labelText='Dokumentum azonosító' inputProps={form.docId.docId}/>
            <form key={formKey} onSubmit={handleSubmit} className="mb-3">

                <DefaultInput defaultValue={inputValues?.data?.name ?? ''} labelText='Név' inputProps={form.kedvezmenyekInputs.field1}/>
                <DefaultInput defaultValue={inputValues?.data?.address ?? ''} labelText='Cím' inputProps={form.kedvezmenyekInputs.field2}/>
                <DefaultInput defaultValue={inputValues?.data?.description ?? ''} labelText='Leírás' inputProps={form.kedvezmenyekInputs.field3}/>
                <DefaultInput defaultValue={inputValues?.data?.phoneNumber ?? ''} labelText='Telefonszám' inputProps={form.kedvezmenyekInputs.field4}/>
                <DefaultInput defaultValue={inputValues?.data?.link ?? ''} labelText='Az oldal linkje' inputProps={form.kedvezmenyekInputs.field5}/>


                <BtnGroup btn={[
                    {text : 'Adatfeltöltés / Módosítása' , type : "submit" , className: "btn btn-success"},
                    {text : 'Új űrlap', inputProps: {onClick : ()=>{setFormKey(formKey+1);setInputValues({})} } , className: "btn btn-warning"}
                ]}/>
            </form>
            <hr />
            <GetUploadedSections setInputValues={setInputValues} eventModify={eventModify} collectionName={collectionName} docs={docs} />
        </div>
    )
}

export default Kedvezmenyek;