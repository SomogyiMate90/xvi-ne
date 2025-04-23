import DownLoadBTN from "../../../Components/DownLoadBTN";

const AccordionItem1 = () =>{
    return(
        <div className="accordion-item ">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Ki lehet tagja az egyesületnek?
          </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#about-us-accordion">
          <div className="accordion-body">
            <h2>Kedves Nagycsaládos!</h2>

            <p>
            Amennyiben érdeklődsz a XVI. kerületi Nagycsaládosok Egyesülete iránt, és tagjaink közé tartozni, a nagycsaládosokért tevékenykedni, elsőként olvasd el Egyesületünk alapító okiratát <span className="text-danger">Link hiányzik</span>  
            </p>

            <p>Ha egyetértesz Egyesületünk célkitűzéseivel, feladataival és tevékenységével, és „rendes”, vagy „pártoló” tagként szeretnél belépni közénk, a belépési nyilatkozatunk kitöltésével <span className="text-danger">(link)</span> jelezheted szándékodat. Rendes tag, akkor lehetsz, ha háztartásodban legalább 3 gyermeket nevelsz, vagy neveltél fel. Pártoló tag bárki lehet, aki tevékenységünket támogatja.</p>

            <p>Tagjaink részt vehetnek a közgyűlés munkájában, rendezvényeinken, igénybe vehetik szolgáltatásainkat, a tagsághoz kötődő kedvezményeket, tagjai lesznek levelezőlistáinknak. Egyesületünk tisztségviselőit választó joggal rendes tagjaink rendelkeznek, és egyben ők választhatóak tisztségviselőnek (elnökség, ellenőrző bizottság tagjai).</p>

            <p>Tagjaink a mindenkori közgyűlés által megállapított tagdíjat fizetik, ezzel támogatva Egyesületünk működését.</p>

            <p>(A 2019- es tagdíj  8000 ft, melyet utalással a XVI. ker. NE  , 16200223-10094635, MagNet Bank számlájára kérjük utalni, kizárólag miután az elnökség felvette az új tagokat és a erről Ők értesítást kaptak.)</p>
            
            <p className="text-danger">NOE tagság: Tagcsaládjaink belépésükkor egy külön belépési nyilatkozattal (link) beléphetnek a Nagycsaládosok Országos Egyesületének (NOE, http://www.noe.hu/) tagjai közé, mely ernyőszervezete a helyi nagycsaládos szervezeteknek. Mind a XVI. kerületi Nagycsaládosok Egyesülete, mind a NOE belépési nyilatkozatát kérjük a következő címre küldeni: tagfelvetel@xvi-ne.hu</p>


            <p>Egyesületünk azon tagjai, akik a NOE-be is belépnek és a XVI. kerületi Nagycsaládosok Egyesületének befizették a tagdíjukat mentesülnek a NOE tagdíjának fizetése alól, mivel azt egyesületünk ezen tagok helyett csoportos befizetéssel megfizeti. A két szervezet tagjaként a NOE szolgáltatásait, híreit is egyesületünkön keresztül hiánytalanul megkapja, a NOE tagkártya használatával országszerte kedvezményekhez juthat. A NOE tagkártyát a XVI. kerületi Nagycsaládosok Egyesülete éves tagdíjának befizetése után érvényesítjük minden évben.</p>


            <p>Ha viszont csak a Nagycsaládosok Országos Egyesületébe lép be és ott fizeti be tagdíját, abból Egyesületünk nem részesül, akkor csak a NOE által nyújtott szolgáltatásokat veheti igénybe!</p>


            <p>A tagokról, jogaikról és kötelezettségeiről, tagság megszüntetéséről részletes információkat Alapszabályunk 4.,5.,6.,7. paragrafusaiban olvashatsz.</p>

            <section>
                <h2>Alapaszabályzat</h2>
                <DownLoadBTN 
                     text='Mindenkori hatályos alapszabályzat'
                     classNameText='btn btn-info order-5'
                     funcionArgs={{
                             eleresiUt : 'alapszabályzat/XVI. ker. NE alapszabályzat.pdf',
                             addfileName: 'XVI. ker. NE alapszabályzat.pdf',
                             read : true
                         }}/>
            </section>

          </div>
        </div>
      </div>
    )
}

export default AccordionItem1;