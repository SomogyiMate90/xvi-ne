import { useContext } from "react";
import Theme from "../../../Functions/themes/ThemeContext";
import { infoIcon } from "../../../Functions/themes/icons";
import InlineLink from "../../../shared/InlineLink";
import LinkOutTargetBlank from "../../../shared/LinkOutTargetBlank";

const AccordionItem2 = () => {
  const theme = useContext(Theme);

  return (
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse2" aria-expanded="false" aria-controls="flush-collapse2">
          Tagság előnyei
        </button>
      </h2>
      <section
        id="flush-collapse2"
        className="accordion-collapse collapse"
        data-bs-parent="#about-us-accordion"
      >
        <div className="accordion-body">
          <h2>Kedves Érdeklődők és Egyesületi Tagok!</h2>

          <p>
            A tagság számos előnyt kínál, amelyeket közösségünk tagjai vehetnek
            igénybe. Ezek az előnyök megkönnyítik a mindennapokat, támogatják a
            családokat, és lehetőséget adnak arra, hogy minél többet hozz ki
            abból, amit egy összetartó közösség nyújtani tud.
          </p>

          <p><strong>Az alábbi kedvezmények érhetők el tagjaink számára:</strong></p>

          <ul className={`hearth ${theme}`}>
            <li>
              <details id='food-distribution'>
                <summary>Heti rendszerességű élelmiszerosztás
                {infoIcon}
                </summary>
                <p className="my-2">
                    Egyesületünk heti rendszerességgel osztja a tagjainak a Magyar Élemiszerbank Egyesület által megmentett élelmiszereket. Zömében pékárú, de néha egyéb meglepetést is kapunk.
                    </p>
                </details></li>
            <li>Ingyenes vagy kedvezményes rendezvény belépőkért iratkozz fel a<LinkOutTargetBlank link={{href: 'https://noe.hu/feliratkozas-hirlevelre/', text: 'NOE hírlevelére'}} /></li>
            <li><InlineLink  myStyle='ms-0' to='/programok/oltozz-ingyen'>Ruhatámogatási program</InlineLink> – „Öltözz ingyen” akciók</li>
            <li>Ingyenes tanácsadások (pl. jogi, pályázati, nevelési)</li>
            <li>Tagi kedvezmények<InlineLink to='/kedvezmenyek'>partnereinknél</InlineLink></li>
            <li>Közösségi eseményeken való részvétel lehetősége a<InlineLink to='/programok'>programok</InlineLink> oldalon</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AccordionItem2;
