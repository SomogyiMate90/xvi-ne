import { useContext, useEffect, useState } from "react";
import DefaultCard from "../shared/DefaultCard";
import { useImmer } from "use-immer";
import { getFIRESOTER_content } from "../Functions/firebase/getFIRESOTER_content";
import Theme from "../Functions/themes/ThemeContext";


const Vezetoseg = ({btnTitle='Elnökség'}) =>{
  const [cardDatas, setCardDatas] = useImmer([]);
  const [openBtn, eventOpenBtn] = useState(null);

  const theme = useContext(Theme);

  useEffect(()=>{

    import('bootstrap/js/dist/offcanvas.js');

    if(openBtn){

      async function fetchElnokseg(){
        console.log('Belépett a blokba')
        try{
          const fireBaseContent = await getFIRESOTER_content('elnokseg');

          /**
           * @type {Array}
           */
          const elnokseg = fireBaseContent.elnokseg;

          if(elnokseg.length < 1 || elnokseg === undefined) throw new Error();
      
          const shortedElnokseg = elnokseg?.sort((a,b)=>{
            return  Number(a?.data?.rendezes)-Number(b?.data?.rendezes)
          })
            setCardDatas(shortedElnokseg)
        } 
        catch{
          eventOpenBtn(null);
          setCardDatas([{ docId: 'a', data: { name: 'HIBA' } }]);
        }
        }
      
      fetchElnokseg()
    }
  },[openBtn])

    return(
        <>
        <button className="btn btn-info mb-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#elnoksegCanvas" aria-controls="elnoksegCanvas" onClick={()=>eventOpenBtn(true)}>
        {btnTitle}
        </button>

<div className={`offcanvas offcanvas-start w-lg-75 ${theme}`}  data-bs-backdrop="static" tabIndex="-1" id="elnoksegCanvas" aria-labelledby="staticBackdropLabel">
  <div className="offcanvas-header">
    <h3 className="offcanvas-title" id="staticBackdropLabel">Elnökség</h3>
    <button type="button" className="btn btn-close red" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body d-flex gap-4 flex-wrap justify-content-evenly">
    
        {
          cardDatas.length === 0 ? (<img style={{width: '30px', height: '30px' }} src="/assets/img/loadingGIF.gif" alt="Kép töltésről"/>) : 
           cardDatas.map((item)=>{
                const {data, docId} = item;
                console.log('Lefutott a kártya készítés')
                return(<DefaultCard key={docId} docId={docId} tag={data}/>)
                }
          )
        }
   
  </div>
</div>
</>
    )
}

export default Vezetoseg;