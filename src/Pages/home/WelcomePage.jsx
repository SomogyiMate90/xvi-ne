import { useContext } from "react";
import SliderPanel from "../../Components/SliderPanel";
import Theme from "../../Functions/themes/ThemeContext";
import PageHelmet from "../../Components/PageHelmet";
import metaAndOpengraphTag from "../../Functions/helm/metaAndOpengraphTag";
import InlineLink from "../../shared/InlineLink";
import LinkOutTargetBlank from "../../shared/LinkOutTargetBlank";

const WelcomePage = () => {

const actualTheme = useContext(Theme);

  return (
    <>
    <PageHelmet helmetObj={metaAndOpengraphTag.homepage}/>
    <div className="page-home">

    {
   <SliderPanel classStyle='not-reverse-mobil h470' displaysListArray={["fali_ujsag","programok"]} />
    }
  
      <hr />
    
      <h1>Üdvözöljük a XVI. kerületi Nagycsaládosok Egyesületének oldalán</h1>
         
          <section>
          <div className="hero-img big-family-hero-img">
            <h2 className="alt-position">Mit csinál egyesületünk?</h2>
            </div>
            <p className="mt-3">              
                Egyesületünk, mely 2003 óta működik, valódi közösséget épít a
                kerület nagycsaládjai számára.
         
            </p>
            <p>
       
                Nálunk a családok közössége összetartást, hagyományokat és
                életörömöt jelent – hiszünk abban, hogy a közös élmények és a
                támogatás megkönnyítik a mindennapokat.
             
            </p>
            <p>
       
                Budapest XVI. kerületének szívében, a Kertvárosi Helytörténeti és
                Emlékezetközpont területén található központunkban (1165 Budapest,
                Veres Péter út 157.) szeretettel várjuk az érdeklődőket.
            
            </p>
          </section>
  
      <section >
        <div className="hero-img hands-hero">
          <h2 className="alt-position">Fő programjaink:</h2>
          </div>
        <ul className={`hearth ${actualTheme}`}>
          <li>
     
              <mark>Hagyományőrzés:</mark> Ünnepeink és rendezvényeink során átadjuk a
              fiataloknak az élet örömeit, miközben megőrizzük a családi
              hagyományokat.
     
          </li>
          <li>
       
              <mark>Ifjúsági kezdeményezések:</mark> Várjuk közösségünkbe a középiskolás fiatal 
              jelentkezőket, akik a kötelező 50 órás közszolgálatukat nálunk
              teljesíthetik. Nézd meg, hogy a te iskolád szerepel-e a listánkban. <InlineLink to='/csatlakozz'>[Szerződött iskolák 🔗]</InlineLink>
        
          </li>
          <li>
    
              <mark>Élelmiszer- és ruhaadomány-gyűjtés:</mark> Hetente <InlineLink to='/csatlakozz#food-distribution'>élelmiszert osztunk,</InlineLink> és
              minden kedden  <InlineLink myStyle="text-wrap" to='/adomanyok'> ruha-, könyv- és játékadományokat fogadunk</InlineLink>, hogy a
              közösség minden tagja számára elérhetőek legyenek a szükséges
              erőforrások.
       
          </li>
          <li>
        
              <mark>Családi rendezvények egész évben:</mark> Tagcsaládjaink számára
              folyamatosan szervezünk zárt és nyitott eseményeket – közös
              kirándulásokat, ünnepi összejöveteleket és tematikus programokat,
              hogy a család minden generációja értékes időt tölthessen együtt. 
              <InlineLink to='/programok'>[ programok 🔗]</InlineLink>
        
          </li>
          <li>
      
              <mark>Kulturális programok és kedvezmények:</mark> Országos együttműködéseink
              révén kulturális eseményeket, színházi belépőket és
              tagkedvezményeket biztosítunk, így minden tagcsalád élménydús,
              gazdag életet élhet. <LinkOutTargetBlank link={{href: 'https://noe.hu/feliratkozas-hirlevelre/', text: '[részletek. 🔗]'}}/>
          
          </li>
        </ul>
      </section>

      <section>
        <div className="hero-img kids-hero-img">
        <h2 className="alt-position">Évről évre egyre többen...</h2>
        </div>
        <p  className="mt-3">
        Egyesületünk évről évre gyarapodik, és minden új programmal még több lehetőséget kínál a családok számára a közösségi összetartásra, az élmények megosztására és a hagyományok ápolására. Ha szeretnél többet megtudni rólunk, illetve aktívan részt venni ebben az izgalmas, folyamatosan fejlődő közösségben, nézd meg részletes információinkat a csatlakozási oldalon, és tudj meg mindent arról, hogyan válhatsz taggá!   <InlineLink to='/csatlakozz'>[ Csatlakozás 🔗]</InlineLink>
        
        </p>
        
      </section>

    </div>
    </>
  );
};

export default WelcomePage;
