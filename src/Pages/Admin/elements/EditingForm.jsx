import SelectCollcetion from "./Forms/SelectCollection";
import { useEffect, useState } from "react";
import { getFIRESOTER_content } from "../../../Functions/firebase/getFIRESOTER_content";
import { useImmer } from "use-immer";
import EditCollectionDocs from "./Forms/EditCollectionDocs";
import collectionsList from "../../../Functions/firebase/firestore/collectionsList.js";
import LoadingTime from "../../../Components/LoadingTime";

const EditingForm  = () =>{
    const [d, setD] = useImmer([])
    const [collection , setCollection] = useState(false);
    const [changedEvent, setChangedEvent] = useState(true);
    const [loading, setLoading] = useState(false)

    useEffect(()=>{

        import('bootstrap/js/dist/modal.js');

        const fetchData = async () => {
            const obj = await getFIRESOTER_content(collection);
            setTimeout(()=>{
                setD(obj);
                setLoading(true);
            },100)
        };
            fetchData();

        
    },[changedEvent,collection])

    const selectedCollcetion = d[collection];

    

    return(
        <div className="outlet">
            <h1 id="h1-in-form">Sikeres bejelentkezés!</h1>


            <section>
            <h2>Kedjük szerkeszteni az adatokat :)</h2>

            <SelectCollcetion setCollection={setCollection} setLoading={setLoading} collectOp={collectionsList}/>

            </section>

            <section>
                <h2>A választott űrlap: <b><span className="text-success text-decoration-underline">{collection}</span></b></h2>
                <hr />

                <div key={collection} >
                    {
                        loading === false ? <LoadingTime text={{title: 'Töltés' , content: ['Egy pillanat...','Épp kommunikálok a szerverrel...']}}/> :
                <EditCollectionDocs eventModify={{changedEvent, setChangedEvent}} collectionName={collection} docs={selectedCollcetion}/>
                    }
                </div>
            </section>

        </div>
    )

}
export default EditingForm;