import ListDocContent from "../../../../shared/ListDocContent"


const GetUploadedSections = ({handleNewForm,setInputValues, eventModify,collectionName,docs}) =>{

    return(

        <section>
            <h3 className="text-info">Adatbázisban szereplő tételek</h3>
            {
                docs.map((item,index)=>{
                    return(<ListDocContent handleNewForm={handleNewForm} setInputValues={setInputValues} eventModify={eventModify} key={item.docId} collectionName={collectionName} item={item} />)
                })
            }
            <hr />
        </section>
    )
}

export default GetUploadedSections