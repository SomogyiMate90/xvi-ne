import ListDocContent from "../../../../shared/ListDocContent"


const GetUploadedSections = ({handleNewForm,setInputValues, eventModify,collectionName,docs}) =>{

    // console.log(docs)

    // const {docId , data } = docs  // Ezt még érdemes lehet visszahozni



    return(

        <section>
            <h3 className="text-info">Adatbázisban szereplő tételek</h3>
            {
                docs.map((item,index)=>{
                    // console.log(item)
                    return(<ListDocContent handleNewForm={handleNewForm} setInputValues={setInputValues} eventModify={eventModify} key={item.docId} collectionName={collectionName} item={item} />)
                })
            }
            <hr />
        </section>
    )
}

export default GetUploadedSections