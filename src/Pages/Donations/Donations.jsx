import PageHelmet from "../../Components/PageHelmet";
import metaAndOpengraphTag from "../../Functions/helm/metaAndOpengraphTag";
import ClothDonarions from "./elements/ClothDonarions";
import FoodDonations from "./elements/FoodDonations";
import OnePercentage from "./elements/OnePercentage";

const Donations = () => {
  return (
    <>
    <PageHelmet helmetObj={metaAndOpengraphTag.donations}/>
    <div className="page-donations">
      <div className="hero-img donation-hero-img">
        <h1 className="poz-center">Adományozz te is a közösségért!</h1>
      </div>
      <p>Az egyesületünk elkötelezetten dolgozik azon, hogy minél több rászoruló család számára biztosítsa az alapvető szükségleteket és támogassa a közösségi összetartást. Ennek érdekében többféle adományt gyűjtünk: pénzbeli támogatást, ruhaadományokat, élelmiszert, valamint gyermek játékokat is. Minden egyes hozzájárulás számít, hiszen segítségével még hatékonyabban tudunk segíteni a rászorulóknak, és építeni egy erős, összetartó közösséget.</p>

    <OnePercentage/>
    <FoodDonations/>
    <ClothDonarions/>

    </div>
    </>
  );
};

export default Donations;
