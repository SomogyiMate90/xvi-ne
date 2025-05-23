import FormView from "../Views/FormView";

const EditCollectionDocs = ({eventModify,collectionName,docs}) =>{


    let component = <span className="text-danger">Válasz űrlapot a gördülő elemmel</span>

    switch (collectionName) {
        case 'dokumentumok' : component = <span>DOKUMENTUMOK - Jelenleg ilyen komponens nincs</span>
        break;
        case 'galeria' : component = <FormView  key='A' eventModify={eventModify} collectionName={collectionName} docs={docs}/>
        break;
        case 'kedvezmenyek' : component = <FormView  key='B' eventModify={eventModify} collectionName={collectionName} docs={docs}/>
        break;
        case 'partnerek' : component = <FormView key='C' eventModify={eventModify} collectionName={collectionName} docs={docs}/>
        break;
        case 'programok' : component = <FormView key='D' eventModify={eventModify} collectionName={collectionName} docs={docs}/>
        break;
        case 'elnokseg' : component = <FormView key='E' eventModify={eventModify} collectionName={collectionName} docs={docs}/>
        break;
        case 'szerzodott_iskolak' : component = <FormView key='G' eventModify={eventModify} collectionName={collectionName} docs={docs}/>
        break;
        case 'gdpr' : component = <FormView key='G' eventModify={eventModify} collectionName={collectionName} docs={docs}/>
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