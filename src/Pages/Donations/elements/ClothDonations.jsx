import InlineLink from "../../../shared/InlineLink";
import MapBtn from "../../../shared/MapBtn";

const ClothDonations = () => {
  return (
    <section id="cloth-donations">
      <h2>Ruha és játék adomány</h2>
      <div className="content">
          <div>
              <p>
                Kinőtte a gyereked a ruháját? Méretváltás volt a felnőtt ruhákban? Nem
                tudod, hová adhatnád le megunt, de még használható játékát?
              </p>
              <p>
                <strong>
                  Amennyiben olyan az állapota, amit te is szívesen hazavinnél, hozd el
                  nekünk.
                </strong> Minden héten kedden van lehetőség <time dateTime="16:00">16:00</time> - <time dateTime="18:30">18:30</time> között adomány leadására központukban.<MapBtn className='d-inline mx-2' address='1165 Budapest, Veres Péter út 157' />
                <br />
                <i>Az átvétel esetleges szüneteléséről a főoldalunk tetején található hírek között tájékozódhat.
                </i>
              </p>
              <p>
                <u>Mi történik a leadott tárgyakkal?</u>
              </p>
              <p>
                Az önkénteseink kiválogatják, szortírozzák, és szépen összehajtogatva
                polcokra kerül. A tagcsaládok - akik igénylik - heti rendszerességgel
                eljönnek, és kiválogatják amit használni tudnak. Évente minimum 3x
                meghirdetjük az <InlineLink to="/programok/oltozz-ingyen">"Öltözz ingyen"</InlineLink> programunkat minden XVI. kerületi
                családnak. Amikor már nem férünk el, hátrányos helyzetű településekre
                juttatjuk el a ruhákat, játékokat, és kezdjük elölről az adománygyűjtést.{" "}
              </p>
              <p>
                <b>
                  Kedves Adományozóink! </b> Köszönjük szépen a nagylelkű ruhaadományokat! Sajnos a raktárhelyünk szűkössége miatt csak olyan ruhákat tudunk fogadni, amit pár héten belül a rászorulók el is visznek. <u><strong>Így kérjük, hogy csak jó minőségű, tiszta, és a szezonnak megfelelő ruhákat hozzanak.</strong></u> A ruhákat átvételkor az önkénteseink átnézik, hogy tényleg megfelelnek-e a fenti kérésnek. Sajnos a többi ruhát nem áll módunkban átvenni. Köszönjük a megértést! 
               
              </p>
          </div>
          <figure>
            <img src="/assets/img/donations/ruha-adomany.webp" alt="Használt ruhák egy karoton dobozban és mellette" />
          </figure>
      </div>
    </section>
  );
};

export default ClothDonations;
