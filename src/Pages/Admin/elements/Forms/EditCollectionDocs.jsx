import FormView from "../Views/FormView";
// import Kedvezmenyek from "../Views/Kedvezmenyek";
// import Partners from "../Views/Partners";
// import Programs from "../Views/Programs";


const EditCollectionDocs = ({eventModify,collectionName,docs}) =>{


    let component = <span className="text-danger">Válasz űrlapot a gördülő elemmel</span>

    switch (collectionName) {
        case 'dokumentumok' : component = <span>DOKUMENTUMOK</span>
        break;
        case 'galeria' : component = <span>GALÉRIA</span>
        break;
        case 'kedvezmenyek' : component = <FormView  key='B' eventModify={eventModify} collectionName={collectionName} docs={docs}/>
        break;
        case 'partnerek' : component = <FormView key='C' eventModify={eventModify} collectionName={collectionName} docs={docs}/>
        break;
        case 'programok' : component = <FormView key='D' eventModify={eventModify} collectionName={collectionName} docs={docs}/>
        break;
        case 'elnokseg' : component = <FormView key='E' eventModify={eventModify} collectionName={collectionName} docs={docs}/>
        break;
        // case 'programok' : component = <Programs eventModify={eventModify} collectionName={collectionName} docs={docs}/>
        // break;
        default: <h3>Valami hiba keletkezett</h3>
    }

    


    return(
        <div>
            {component}
        </div>
    )
}

export default EditCollectionDocs;