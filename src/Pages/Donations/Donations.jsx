import ClothDonarions from "./elements/ClothDonarions";
import FoodDonations from "./elements/FoodDonations";
import OnePercentage from "./elements/OnePercentage";

const Donations = () => {
  return (
    <div className="page-donations">
      <h1>Adományozz te is a közösségért!</h1>
      <p>Az egyesületünk elkötelezetten dolgozik azon, hogy minél több rászoruló család számára biztosítsa az alapvető szükségleteket és támogassa a közösségi összetartást. Ennek érdekében többféle adományt gyűjtünk: pénzbeli támogatást, ruhaadományokat, élelmiszert, valamint gyermek játékokat is. Minden egyes hozzájárulás számít, hiszen segítségével még hatékonyabban tudunk segíteni a rászorulóknak, és építeni egy erős, összetartó közösséget.</p>

    <OnePercentage/>
    <FoodDonations/>
    <ClothDonarions/>

    </div>
  );
};

export default Donations;
