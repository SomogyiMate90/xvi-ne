import { useContext } from "react";
import SliderPanel from "../../Components/SliderPanel";
import Theme from "../../Functions/themes/ThemeContext";
import PageHelmet from "../../Components/PageHelmet";
import metaAndOpengraphTag from "../../Functions/helm/metaAndOpengraphTag";

const WelcomePage = () => {

const actualTheme = useContext(Theme);

  

  return (
    <>
    <PageHelmet helmetObj={metaAndOpengraphTag.homepage}/>
    <div className="page-home">

    {
      actualTheme === 'akadaly' ?  <></> :  <SliderPanel classStyle='not-reverse-mobil h470' displayList='programok' />
    }


    
      <hr />
    
      <h1>Üdvözöljük a XVI. kerületi Nagycsaládosok Egyesületének oldalán</h1>
   
   
      
          <section>
          <div className="hero-img famiy-hero-img">
            <h2 className="alt-position">Mit csinál Egyesületünk?</h2>
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
       
                A Budapest XVI. kerület szívében, a Kertvárosi Helytörténeti és
                Emlékezetközpont területén található központunkban (1165 Budapest,
                Veres Péter út 157) szeretettel várjuk az érdeklődőket.
            
            </p>
          </section>
  




    
      <section >
        <div className="hero-img hands-hero">
          <h2 className="alt-position">Fő programjaink:</h2>
          </div>
        <ul>
          <li className={actualTheme}>
     
              <mark>Hagyományőrzés:</mark> Ünnepeink és rendezvényeink során átadjuk a
              fiataloknak az élet örömeit, miközben megőrizzük a családi
              hagyományokat. [Részletek →]
     
          </li>
          <li className={actualTheme}>
       
              <mark>Ifjúsági kezdeményezések:</mark> Ifjúsági csoportunk aktívan várja a
              jelentkezőket, akik így akár a kötelező 50 óra közszolgálatukat is
              teljesíthetik. [Jelentkezés →]
        
          </li>
          <li className={actualTheme}>
    
              <mark>Élelmiszer- és ruhaadomány-gyűjtés:</mark> Hetente élelmiszert osztunk, és
              minden kedden ruha-, könyv- és játékadományokat fogadunk, hogy a
              közösség minden tagja számára elérhetőek legyenek a szükséges
              erőforrások. [További információ →]
       
          </li>
          <li className={actualTheme}>
        
              <mark>Családi rendezvények egész évben:</mark> Tagcsaládjaink számára
              folyamatosan szervezünk zárt és nyitott eseményeket – közös
              kirándulásokat, ünnepi összejöveteleket és tematikus programokat,
              hogy a család minden generációja értékes időt tölthessen együtt.
              [Programok →]
        
          </li>
          <li className={actualTheme}>
      
              <mark>Kulturális programok és kedvezmények:</mark> Országos együttműködéseink
              révén kulturális eseményeket, színházi belépőket és
              tagkedvezményeket biztosítunk, így minden nagycsalád élménydús,
              gazdag életet élhet. [Részletek →]
          
          </li>
        </ul>
      </section>

      <section>
        <div className="hero-img crowd-hero-img">
        <h2 className="alt-position">Évről évre egyre többen...</h2>
        </div>
        <p  className="mt-3">
   
        Az egyesületünk évről évre gyarapodik, és minden új programmal még több lehetőséget kínál a családok számára a közösségi összetartásra, az élmények megosztására és a hagyományok ápolására. Ha szeretnél többet megtudni rólunk, illetve aktívan részt venni ebben az izgalmas, folyamatosan fejlődő közösségben, nézd meg részletes információinkat a tagfelvételi oldalon, és tudj meg mindent arról, hogyan válhatsz taggá! [Csatlakozás →]
        
        </p>
        
      </section>

    </div>
    </>
  );
};

export default WelcomePage;
