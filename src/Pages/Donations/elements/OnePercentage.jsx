import { useContext } from "react";
import Theme from "../../../Functions/themes/ThemeContext";
import LinkOutTargetBlank from "../../../shared/LinkOutTargetBlank";

const OnePercentage = () => {

  const theme = useContext(Theme)
  
  

  return (
    <section>
      <h2>1% felajánlás</h2>
      <div className="content">
          <div>
            <p>
              Kedves Mindenki! Kérjük, aki teheti, ajánlja fel nekünk <LinkOutTargetBlank link={{text: 'adója 1 %-át!', href:'https://eszja.nav.gov.hu/app/login/#login'}} />
            </p>
            <blockquote className="fst-italic">
            "Az szja 1+1%-áról – függetlenül az szja-bevallás módjától – a bevallással együtt vagy külön is lehet rendelkezni.""
              <cite><LinkOutTargetBlank myStyle="text-wrap" link={{text: 'Nemzeti Adó- és Vámhivatal (NAV)', href:'https://nav.gov.hu/Elethelyzetek-adozasa/munka/Rendelkezes-az-ado-11-szazalekarol'}} /></cite>
            </blockquote>
            <p>

            </p>
            <ul className={`hearth ${theme}`}>
              <li><b>Név:</b> XVI.KERÜLETI NAGYCSALÁDOSOK EGYESÜLETE</li>
              <li><b>Adószám:</b> 18180781-1-42 </li>
              <li><b>Székhely </b>1165 BUDAPEST ÍJÁSZ UTCA 17/B</li>
            </ul>
            <p><mark>Köszönjük hogy adóbálásánál gondolt ránk.</mark></p>
          </div>
          <figure>
            <img src="/assets/img/donations/1szazalek1.webp" alt="1%" />
          </figure>
      </div>
    </section>
  );
};

export default OnePercentage;
