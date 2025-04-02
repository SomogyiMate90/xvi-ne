import deleteFirestoreDoc from "../Functions/firebase/deleteFirestoreDoc";

/**
 *
 * @param {object} param0
 * @returns
 */
const ListDocContent = ({setInputValues, eventModify, collectionName,item }) => {
  const { docId, data } = item;

  const { changedEvent, setChangedEvent } = eventModify;

  const handleDelete = async () =>{

      const resp = await deleteFirestoreDoc(collectionName,docId)
        console.log(resp)
        setChangedEvent(!changedEvent);
  }

  const setDefaultValues = () =>{
        setInputValues({data, docId})
  }


  const keyList = Object.keys(data);

  return (
    <div className=" doc-window">
      {keyList.map((it, ind) => {
        return (    
            <pre key={ind}>
                {/* // Kiszervezni külön függvényben az "it" -et mert fasz tudja mikor mit fog vossza adni */}
                {it} : {Array.isArray(data[it]) ? data[it].join(", ") : data[it]}  
            </pre>
        );
      })}

      <pre>
        docId : {docId}
      </pre>

      <div className="d-flex justify-content-evenly">
          <button onClick={setDefaultValues} className="btn btn-info">Javítás</button>
          <button onClick={handleDelete} className="btn btn-danger">Törlés</button>
      </div>
    </div>
  );
};

export default ListDocContent;
