import SelectCollcetion from "./Forms/SelectCollection";
import { useEffect, useState } from "react";
import { getFIRESOTER_content } from "../../../Functions/firebase/getFIRESOTER_content";
import { useImmer } from "use-immer";
import EditCollectionDocs from "./Forms/EditCollectionDocs";
import collectionsList from "../../../Functions/firebase/collectionsList";



const EditingForm  = () =>{
    const [d, setD] = useImmer([])
    const [collection , setCollection] = useState('');
    const [changedEvent, setChangedEvent] = useState(true)

    useEffect(()=>{
        const fetchData = async () => {
            const obj = await getFIRESOTER_content();
            // const obj = await getFIRESOTER_content(collection);
            setD(obj);
            console.log(obj);
        };
    
        fetchData();
        
    },[changedEvent,collection])

    // const collectionOptions = Object.keys(d);
    const selectedCollcetion = d[collection]

    return(
        <div className="outlet">
            <h1>Sikeres bejelentkezés!</h1>


            <section>
            <h2>Kedjük szerkeszteni az adatokat :)</h2>

            <SelectCollcetion setCollection={setCollection} collectOp={collectionsList}/>

            </section>

            <section>
                <h2>A választott űrlap: <b><span className="text-success">{collection}</span></b></h2>
                <hr />

                <div key={collection} >
                <EditCollectionDocs eventModify={{changedEvent, setChangedEvent}} collectionName={collection} docs={selectedCollcetion}/>
                </div>
            </section>

        </div>
    )

}
export default EditingForm;