import { useContext } from "react";
import FireStoreContext from "../../../Functions/contexts/fireSroreContext";
import LinkOutTargetBlank from "../../../shared/LinkOutTargetBlank";

const AccordionItem4 = () =>{

  const fireData = useContext(FireStoreContext);

    return(
        <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse4" aria-expanded="false" aria-controls="flush-collapse4">
        Szerződött iskolák
          </button>
        </h2>
        <div id="flush-collapse4" className="accordion-collapse collapse" data-bs-parent="#about-us-accordion">
          <div className="accordion-body">
             <p>Csatlakozz Te is azokhoz a fiatalokhoz, akik nem csak "letudni" szeretnék az előírt <mark>50 közösségi szolgálati órát</mark>, hanem valóban formálni akarják környezetüket és közösségüket! Ha a felsorolt középiskolák egyikébe jársz, a NOE Egyesületnél végzett szolgálati óráid ugyanolyan hivatalosak, mint az iskoládban elismert feladatok.</p>
            <p>Nálunk nem egyszerűen tennivalókról van szó, hanem együtt valósítunk meg olyan ötleteket, amik igazán megszínesítik a közösségi eseményt: lehet ez például a dekoráció összeállítása, adományok átválogatása, vagy a résztvevők fogadása. Így mindenki beleviheti saját kreativitását: nem pusztán végrehajtod, ami rád vár, hanem élménnyé formálod a programot.</p>
            <p>A NOE Egyesület minden elvégzett feladatot hivatalosan igazol, így a közösségi szolgálat óráit egyszerűen be tudod jegyeztetni a jogszabály által előírt keretek között. <mark>Ne feledd: mielőtt belevágsz, vedd fel a kapcsolatot egyszerre az iskoláddal is, és a NOE Egyesülettel is</mark>, hiszen a két intézmény közötti szerződés teremti meg a hiteles elismerést. Légy részese Te is ennek a lendületnek, és mutassuk meg együtt, hogy a közösség ereje valóban csodákra képes!</p>

            <h3>Iskolák listája:</h3>
            <ul>
              {
                  !fireData || !Array.isArray(fireData.szerzodott_iskolak) ? (
                    <img src="/assets/img/loadingGIF.gif" alt="Töltés"/>
                  ) : fireData.szerzodott_iskolak.length === 0 ? (
                    <span>Nincs megjeleníthető iskola</span>
                  ) 
                    : fireData.szerzodott_iskolak.map(({data, docId},n)=>{

                 

                  return(
                    <li className="mb-2 border-bottom " key={docId}>
                                    <span className="d-block fw-bold">{data.title}</span>
                                    <span className="d-block">{data.address}</span>
                                    <span className="mx-2"><LinkOutTargetBlank link={{href:  `tel:${data?.phoneNumber}`, text : data?.phoneNumber }} /></span>
                                    <span className="mx-2"><LinkOutTargetBlank link={{href:data?.link, text : 'weboldal' }} /></span>
                  </li>
                  )


                })
              }
            </ul>

          </div>
        </div>
      </div>
    )
}

export default AccordionItem4;