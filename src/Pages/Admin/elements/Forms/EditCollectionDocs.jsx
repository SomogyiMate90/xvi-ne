import Kedvezmenyek from "../Views/Kedvezmenyek";
import Programs from "../Views/Programs";


const EditCollectionDocs = ({eventModify,collectionName,docs}) =>{


    let component = <span className="text-danger">Válasz űrlapot a gördülő elemmel</span>

    switch (collectionName) {
        case 'dokumentumok' : component = <span>DOKUMENTUMOK</span>
        break;
        case 'galeria' : component = <span>GALÉRIA</span>
        break;
        case 'kedvezmenyek' : component = <Kedvezmenyek eventModify={eventModify} collectionName={collectionName} docs={docs}/>
        break;
        case 'programok' : component = <Programs eventModify={eventModify} collectionName={collectionName} docs={docs}/>
        break;

        default: <h3>Valami hiba keletkezett</h3>
    }

    


    return(
        <div>
            {component}
        </div>
    )
}

export default EditCollectionDocs;