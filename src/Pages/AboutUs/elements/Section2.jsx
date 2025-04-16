import LinkBTN from "../../../shared/LinkBTN";
import Vezetoseg from "../../../Components/Vezetoseg";

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
          a nagycsaládok egymást ismerő és segítő közösségekké szervezése.
        </li>
      </ol>

      <p>
        Egyesületünk 7 tagú elnöksége és 2 tagú ellenőrző bizottsága
        önkéntesekből áll, akik szabadidejükben, de nagy lelkesedéssel dolgoznak
        az egyesület közösségéért. Időnként szervezünk olyan megmozdulásokat is,
        melyek nyitottak a kerület családjai részére, pl. hagyományos ünnepekhez
        kapcsolódó családi napokat stb. Jó kapcsolatunk van a Kertvárosi
        Helytörténeti és Emlékezetközponttal, a XVI. kerületi Vöröskereszttel,a
        Magyar Élelmiszerbankkal, néhány alapítvánnyal és egyesülettel. Egymást
        támogatva, kiegészítve több eredményt érhetünk el.
      </p>

    <Vezetoseg/>

      <p>
        Főbb bevételi forrásunk a befizetett éves tagdíjakból áll (2018-ban 8000
        forint), melyet rászoruló tagjaink csak részben, vagy egyáltalán nem
        tudnak kifizetni, ezért a rendezvényeinkre tárgyi adományokat gyűjtünk
        és pályázatokat írunk a költségek fedezésére. Költségeink a telefon és
        postaköltségből, adományszállításból, rendezvényszervezésből adódnak.
      </p>

      <div>
        <p>
          2019-ben új székhelyünk lett mely a1165 Budapest, Veres Péter út 157
          alatt található
        </p>
        <p>Az átadó ünnepségről videó is készült</p>
        <div className="my-4 d-flex justify-content-center">
          <iframe
            style={{ maxWidth: "680px", width: "100%", aspectRatio: "16/9" }}
            className="youtube-video"
            src="https://www.youtube-nocookie.com/embed/c_8aNDKJRCc?si=EqfEoc4ByBWDlTKj"
            title="Az átadó ünnepségről készült videó, interjú"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <p>
        Működtetjük az „öltözz ingyen programot”. A behozott ruhaadományt az
        önkénteseink szétválogatják, így a családok már csak azzal találkoznak,
        ami használható állapotban van. A tagjaink számára ez heti
        rendszerességgel nyitva áll és időnként kinyitjuk a kapukat a kerület
        minden családjának.
      </p>

      <p>
        Az egyesület gyerekei hetente díjmentes korrepetáláson vehetnek részt
        több tantárgyból.
      </p>

      <p>
        Hetente kétszer a MÉB segítségével élelmiszert mentünk. Pillanatnyilag
        110 tagcsaládunk részesül heti rendszerességgel élelmiszeradományból.
      </p>

      <p>
        Várunk tagjaink közé minden kis- és nagycsaládot. Legjobban azok érzik
        magukat köztünk, akik sajátjuknak tekintik az egyesületet, egyetértenek
        a céljaival, és ötleteikkel, segítségükkel erősítik a jó hangulatú
        önkéntes csapatot.
      </p>

      <div className="d-flex justify-content-end">
        <LinkBTN text="Csatlakozz" url="/Csatlakozz" />
      </div>
    </section>
  );
};

export default Section2;
