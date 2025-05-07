import DownLoadBTN from "../../../Components/DownLoadBTN";
import NyilatkozatokBTNGroup from "../../../Components/NyilatkozatokBTNGroup";
import InlineLink from "../../../shared/InlineLink";
import LinkOutTargetBlank from "../../../shared/LinkOutTargetBlank";

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
            Amennyiben érdeklődsz a XVI. kerületi Nagycsaládosok Egyesülete iránt, és szeretnél tagjaink közé tartozni, a nagycsaládosokért tevékenykedni, elsőként olvasd el Egyesületünk alapító okiratát. 
            </p>

            <p>Ha egyetértesz Egyesületünk célkitűzéseivel, feladataival és tevékenységével, és „rendes” vagy „pártoló” tagként szeretnél belépni közénk, a belépési nyilatkozat kitöltésével jelezheted szándékodat. Rendes taggá az válhat, aki háztartásában legalább 3 gyermeket nevel, vagy nevelt fel. Pártoló tag bárki lehet, aki támogatja tevékenységünket.</p>

            <p>Tagjaink részt vehetnek a közgyűlés munkájában, rendezvényeinken, igénybe vehetik szolgáltatásainkat, a tagsághoz kötődő kedvezményeket, és tagjai lesznek levelezőlistáinknak. Egyesületünk tisztségviselőit azok a rendes tagok választhatják, akik választójoggal rendelkeznek, és egyben ők maguk is választhatóak tisztségviselőnek (például az elnökség vagy az ellenőrző bizottság tagjai).</p>

            <p>Tagjaink a mindenkori közgyűlés által megállapított tagdíjat fizetik, ezzel támogatva Egyesületünk működését.</p>

            {/* <p>(A 2019- es tagdíj  8000 ft, melyet utalással a XVI. ker. NE  , 16200223-10094635, MagNet Bank számlájára kérjük utalni, kizárólag miután az elnökség felvette az új tagokat és a erről Ők értesítást kaptak.)</p> */}
            
            <p>NOE tagság: Tagcsaládjaink belépésükkor egy külön belépési nyilatkozattal beléphetnek a <LinkOutTargetBlank link={{href: 'http://www.noe.hu/', text: 'Nagycsaládosok Országos Egyesületének'}} /> tagjai közé, mely ernyőszervezete a helyi nagycsaládos szervezeteknek. Mind a XVI. kerületi Nagycsaládosok Egyesülete, mind a NOE belépési nyilatkozatát kérjük a következő címre küldeni: <InlineLink myStyle='text-info'  to='mailto:nagycsaladosok16@gmail.com'>nagycsaladosok16@gmail.com</InlineLink></p>

            <NyilatkozatokBTNGroup/>


            <p>Egyesületünk azon tagjai, akik a NOE-be is belépnek - és a XVI. kerületi Nagycsaládosok Egyesületének befizették a tagdíjukat - mentesülnek a NOE tagdíjának fizetése alól, mivel azt egyesületünk ezen tagok helyett csoportos befizetéssel megfizeti. A két szervezet tagjaként a NOE szolgáltatásait, híreit is egyesületünkön keresztül hiánytalanul megkapják, a NOE tagkártya használatával országszerte kedvezményekhez juthatnak. A NOE tagkártyát a XVI. kerületi Nagycsaládosok Egyesülete éves tagdíjának befizetése után érvényesítjük minden évben.</p>


            <p>Amennyiben csak a Nagycsaládosok Országos Egyesületébe lép be, és ott fizeti be tagdíját, Egyesületünk nem részesedik belőle, ezért csak a NOE által nyújtott szolgáltatásokat veheti igénybe!</p>


            <p>A tagokról, jogaikról és kötelezettségeikről, tagság megszüntetéséről részletes információkat <span className="text-nowrap">Alapszabályunk 4–7. §-aiban</span> olvashatsz.</p>

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