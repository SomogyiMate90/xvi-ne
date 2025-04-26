
const AccordionItem4 = () =>{
    return(
        <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse4" aria-expanded="false" aria-controls="flush-collapse4">
        Szerződött iskolák
          </button>
        </h2>
        <div id="flush-collapse4" className="accordion-collapse collapse" data-bs-parent="#about-us-accordion">
          <div className="accordion-body">
             <p>Csatlakozz Te is azokhoz a fiatalokhoz, akik nem csak az előírt <mark>50 közösségi szolgálat órát</mark> „letudni” szeretnék, hanem valóban formálni akarják környezetüket és közösségüket! Ha a felsorolt középiskolák egyikébe jársz, a NOE Egyesületnél végzett szolgálati óráid ugyanolyan hivatalosak, mint az iskoládban elismert feladatok.</p>
            <p>Nálunk nem egyszerűen „feladatokat” osztunk ki, hanem együtt valósítunk meg olyan ötleteket, amik igazán megszínesítik a közösségi eseményt: lehet ez például a dekoráció összeállítása, adományok átválogatása vagy a résztvevők fogadása. Így mindenki beleviheti saját kreativitását: nem pusztán elvégzed, ami rád vár, hanem élménnyé formálod a programot.</p>
            <p>A NOE Egyesület minden elvégzett feladatot hivatalosan igazol, így a közösségi szolgálat óráit egyszerűen be tudod jegyeztetni a jogszabály által előírt keretek között. <mark>Ne feledd: mielőtt belevágsz, vedd fel a kapcsolatot egyszerre az iskoláddal és a NOE Egyesülettel</mark>, hiszen a két intézmény közötti szerződés teremti meg a hiteles elismerést. Légy részese Te is ennek a lendületnek, és mutassuk meg együtt, hogy a közösség ereje valóban csodákra képes!</p>

            <h3>Iskolák Listája</h3>
            <ul>
              <li>ISK. 1.  Valahol utca 2</li>
              <li>ISK. 1.  Valahol utca 2</li>
              <li>ISK. 1.  Valahol utca 2</li>
            </ul>


           

          </div>
        </div>
      </div>
    )
}

export default AccordionItem4;