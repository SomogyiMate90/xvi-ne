import LinkOutTargetBlank from "../../shared/LinkOutTargetBlank";
import PageHelmet from "../../Components/PageHelmet";
import metaAndOpengraphTag from "../../Functions/helm/metaAndOpengraphTag";
import XVIKeruletiKedv from "./elements/XVIKeruletiKedv";

const Discounts = () => {
  return (
    <>
    <PageHelmet helmetObj ={metaAndOpengraphTag.discounts}/>
    <div className="page-discounts">
      <div className="hero-img percent-hero-img">
        <h1 className="poz-center">Tagkártya kedvezmény</h1>
      </div>
      <p>
        Egyesületünk kártyájával többféle kedvezményt biztosíthat
        tagcsaládjai számára a mindennapi vásárlásaik során.
      </p>

      <section>
        <h2>Nagycsaládosok Országos Egyesületének kedvezményei</h2>
        <p>A XVI. kerületen kívül az ország számos helyén található kedvezmény, melyeket honlapunk nem tart nyilván.</p>
        <p><LinkOutTargetBlank link={{href : 'https://noe.hu/kedvezmenyek/' , text : 'A kedvezmények itt megtalálhatóak'}}/></p>
      </section>

    <XVIKeruletiKedv/>


    </div>
    </>
  );
};

export default Discounts;
