import LinkBTN from "../../../shared/LinkBTN";
import Vezetoseg from "../../../Components/Vezetoseg";
import InlineLink from "../../../shared/InlineLink";
import MapBtn from "../../../shared/MapBtn";
import LinkOutTargetBlank from "../../../shared/LinkOutTargetBlank";

const Section2 = () => {

  return (
    <section>
      <h2>Céljaink:</h2>
      
        <ol>
          <li>az élet és az anyaság tiszteletére és szeretetére nevelés,</li>
          <li>
            a házasságért és a jövő generációjáért érzett felelősség erősítése,
          </li>
          <li>
            a nagycsaládosok sajátos érdekeinek megjelenítése, képviselete és
            szolgálata,
          </li>
          <li>
            felmutatni a társadalomnak a nagycsaládosok által képviselt értékeket,
          </li>
          <li>
            a nagycsaládok egymást ismerő és segítő közösségekké szervezése,
          </li>
          <li>
            az idősebb korosztály segítése,
          </li>
          <li>
            az ifjúság segítése és számukra célzott programok szervezése
          </li>
        </ol>

      <p>
        Egyesületünk 7 tagú elnöksége és 3 tagú ellenőrző bizottsága
        önkéntesekből áll, akik szabadidejükben, nagy lelkesedéssel dolgoznak
        az egyesület közösségéért. Időnként szervezünk olyan megmozdulásokat is,
        melyek nyitottak a kerület családjai részére, (pl. hagyományos ünnepekhez
        kapcsolódó családi napokat stb.). Jó kapcsolatunk van a Kertvárosi
        Helytörténeti és Emlékezetközponttal, a Magyar Vöröskereszt XVI. Kerületi Szervezetével, a
        Magyar Élelmiszerbankkal, néhány alapítvánnyal és egyesülettel. Egymást
        támogatva, kiegészítve több eredményt érhetünk el.
      </p>

    <div className="d-flex justify-content-end mx-5"><Vezetoseg/></div>

      <p>
        Főbb bevételi forrásunk a befizetett éves tagdíjakból áll (2025-ben 12000
        forint). A tagdíj mérséklését, részletfizetését lehet kérni.
      </p>
      <p>
        Állandó költségeink: helyiségünk bérleti díja és rezsije, telefonszámla, könyvelési díj, bankköltség, postaköltség, rendezvények költségei.
        Rendezvényeinkre tárgyi adományokat gyűjtünk
        és pályázatokat írunk a költségek fedezésére.
      </p>

     
        <div className="d-flex"> 

        <p>
          <b>
            2019-ben új székhelyünk lett, mely a 1165 Budapest, Veres Péter út 157.
            alatt található. 
          </b>
        </p>
        <MapBtn className='d-inline my-auto' address='1165 Budapest, Veres Péter út 157' />
        </div>
        <p>Az átadó ünnepségről videó is készült.</p>
        {/* <div className="my-4 d-flex justify-content-center"> */}

        <video preload="none"
               id="celebration-video"  
               aria-label='ünnepség videója' 
               controls 
               height={'100%'} 
               width={"80%"}
               className="d-block mx-auto mb-3"  
               poster="/assets/img/helm/metaLogo.jpg"
               >
            <source  src='https://firebasestorage.googleapis.com/v0/b/xvi-ne-d6b24.firebasestorage.app/o/statikusElemek%2F20190912%20NOE%20XVI.mp4?alt=media&token=7fb699f2-78c9-4ca1-be1d-dbd076092f2a' 
            type='video/mp4' />
        </video>

     

      <p>
        Működtetjük az <InlineLink to='/programok/oltozz-ingyen'>„öltözz ingyen programot”.</InlineLink> A behozott ruhaadományt az
        önkénteseink szétválogatják, így a családok már csak azzal találkoznak,
        ami használható állapotban van. Tagjaink számára ez heti
        rendszerességgel elérhető, és időnként megnyitjuk a kapukat a kerület
        minden családja előtt is.
      </p>


      <p>
        Hetente a <LinkOutTargetBlank link={{text:'Magyar Élelmiszerbank Egyesület', href:'https://www.elelmiszerbank.hu/'}}/> segítségével élelmiszert mentünk. Pillanatnyilag
        115 tagcsaládunk részesül heti rendszerességgel élelmiszeradományból.
      </p>

      <p>
        Várunk tagjaink közé minden kis- és nagycsaládot. Legjobban azok érzik
        magukat köztünk, akik sajátjuknak tekintik az egyesületet, egyetértenek
        a céljaival, és ötleteikkel, segítségükkel erősítik a jó hangulatú
        önkéntes csapatot.
      </p>

      <div className="d-flex justify-content-end mx-5">
        <LinkBTN text="Csatlakozz" url="/Csatlakozz" />
      </div>
    </section>
  );
};

export default Section2;
