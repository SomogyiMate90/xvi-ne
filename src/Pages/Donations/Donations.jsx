import { useContext } from "react";
import PageHelmet from "../../Components/PageHelmet";
import metaAndOpengraphTag from "../../Functions/helm/metaAndOpengraphTag";
import ClothDonations from "./elements/ClothDonations";

import MoneyDonations from "./elements/MoneyDonations";
import OnePercentage from "./elements/OnePercentage";
import Theme from "../../Functions/themes/ThemeContext";
import CultureDonation from "./elements/CultureDonation";

const Donations = () => {

  const theme = useContext(Theme)

  return (
    <>
    <PageHelmet helmetObj={metaAndOpengraphTag.donations}/>
    <div className={`page-donations ${theme}`}>
      <div className="hero-img donation-hero-img">
        <h1 className="poz-center">Adományozz te is a közösségért!</h1>
      </div>
      
      <p>Egyesületünk elkötelezetten dolgozik azon, hogy minél több rászoruló család számára biztosítsa az alapvető szükségleteket, és támogassa a közösségi összetartást. Ennek érdekében többféle adományt gyűjtünk: pénzbeli támogatást, ruhaadományokat, élelmiszert, valamint gyermekjátékokat is. Minden egyes hozzájárulás számít, hiszen segítségével még hatékonyabban tudunk segíteni a rászorulóknak, és építeni egy erős, összetartó közösséget.</p>

    <OnePercentage/>
    <ClothDonations/>
    <MoneyDonations/>
    <CultureDonation/>

    </div>
    </>
  );
};

export default Donations;
