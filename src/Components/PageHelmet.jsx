import { Helmet, HelmetProvider } from "react-helmet-async";
import metaAndOpengraphTag from "../Functions/helm/metaAndOpengraphTag";

/**
 * @function PageHelmet
 * @description A `helmet` komponens segítségével beállítja az oldal meta tagjeit, amelyek fontosak a SEO optimalizálásához és a közösségi médiás megjelenéshez.
 *
 * @param {Object} helmetObj - A meta adatok objektuma, amely tartalmazza az oldal címét, leírását, kulcsszavait, és közösségi média meta adatokat.
 * @param {string} helmetObj.title - Az oldal címe, ami a böngésző fülén jelenik meg.
 * @param {string} helmetObj.description - Az oldal leírása, amely a keresőmotorok számára fontos és a találati listákon jelenik meg.
 * @param {string} helmetObj.keywords - Kulcsszavak, amelyek segítenek a keresőoptimalizálásban (SEO).
 * @param {string} helmetObj.robots - A robotok számára adott utasítások (pl. "noindex", "nofollow").
 * @param {Array} helmetObj.metaProperties - Közösségi média és SEO céljából használt Open Graph meta adatok.
 * @param {string} helmetObj.metaProperties[0] - Az Open Graph típusának megadása, pl. "website".
 * @param {string} helmetObj.metaProperties[1] - Az oldal URL-je, amely a közösségi médiában és keresőkben jelenik meg.
 * @param {string} helmetObj.metaProperties[2] - Az oldal képének URL-je.
 * @param {string} helmetObj.metaProperties[3] - Az oldal képének biztonságos URL-je (HTTPS).
 * @param {string} helmetObj.metaProperties[4] - A kép szélessége.
 * @param {string} helmetObj.metaProperties[5] - A kép magassága.
 * @param {string} helmetObj.metaProperties[6] - A kép alternatív szövege (alt text).
 * @param {string} helmetObj.metaProperties[7] - A kép MIME típusa.
 */

const PageHelmet = ({ helmetObj }) => {
  const titleStart = "NOE XVI.";

  const {metaNameObj,metaPropertyArray } = helmetObj || metaAndOpengraphTag.homepage

  return (
    <HelmetProvider>
      <Helmet>
        <title>{metaNameObj?.title || titleStart}</title>
        <meta name="description" content={metaNameObj?.description || ""} />
        <meta name="keywords" content={metaNameObj?.keywords || metaAndOpengraphTag.homepage.keywords} />
        <meta name="robots" content={metaNameObj?.robots || "index,follow"} />
        {metaPropertyArray?.map((item, index) => {
          return <meta key={index} name={item[0]} content={item[1]} />;
        })}
      </Helmet>
    </HelmetProvider>
  );
};

export default PageHelmet;
