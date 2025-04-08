import deleteFirestoreDoc from "../Functions/firebase/deleteFirestoreDoc";
import toConverStringAny from "../Functions/Utils/toConverStringAny";
import BtnGroup from "../Pages/Admin/elements/Forms/BtnGroup";

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
    
    const h1El = document.getElementById("h1-in-form");
    h1El.scrollIntoView({ behavior: 'smooth' })
  }


  const keyList = Object.keys(data);

  return (
    <div className=" doc-window">
      {keyList.map((it, ind) => {
        
        if(it === 'base64Url'){
          return(
            <pre key={ind}>
              Kép:
              <img  src={data[it]} width='200px' alt="" />
            </pre>
          )
        }
        else{
          const convertedElement = toConverStringAny(data[it]);

          return (    
              <pre key={ind}>
                  {`${it} : ${convertedElement}`}
              </pre>
          );
        }


      })}

      <pre>
        docId : {docId}
      </pre>

      <BtnGroup btn={
            [{inputProps :{onClick : setDefaultValues},className : "btn btn-info",text: 'Javítás'},
              {inputProps :{onClick : handleDelete},className : "btn btn-danger",text: 'Törlés'}

            ]}/>
    </div>
  );
};

export default ListDocContent;
