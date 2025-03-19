import LinkOutTargetBlank from "../../Components/LinkOutTargetBlank";
import XVIKeruletiKedv from "./elements/XVIKeruletiKedv";

const Discounts = () => {
  return (
    <div>
      <h1>Tagkártya kedvezmény</h1>
      <p>
        Egyesületünk kártyájával többféle kedvezményt tud biztosítani
        tagcsaládjai számára a mindennapi vásárlásaik során.
      </p>

      <section>
        <h2>Nagycsaládosok Országos Egyesületének kedvezményei</h2>
        <p>A XVI. kerületen kívül az ország számos helyén található kedvezmény, melyeket honlapunk nem tart nyilván.</p>
        <p><LinkOutTargetBlank link={{href : 'https://noe.hu/kedvezmenyek/' , text : 'A kedvezmények itt megtalálhatóak'}}/></p>
      </section>

    <XVIKeruletiKedv/>


    </div>
  );
};

export default Discounts;
