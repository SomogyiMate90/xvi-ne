import { Helmet, HelmetProvider } from "react-helmet-async";
import metaAndOpengraphTag from "../Functions/helm/metaAndOpengraphTag";
import { useLocation } from "react-router-dom";

/**
 * @function PageHelmet
 * @description A `helmet` komponens segítségével beállítja az oldal meta tagjeit, amelyek fontosak a SEO optimalizálásához és a közösségi médiás megjelenéshez.
 *
 * @param {Object} helmetObj - A meta adatok objektuma, amely tartalmazza az oldal címét, leírását, kulcsszavait, és közösségi média meta adatokat.
 * @param {string} helmetObj.title - Az oldal címe, ami a böngésző fülén jelenik meg.
 * @param {string} helmetObj.description - Az oldal leírása, amely a keresőmotorok számára fontos és a találati listákon jelenik meg.
 * @param {string} helmetObj.keywords - Kulcsszavak, amelyek segítenek a keresőoptimalizálásban (SEO).
 * @param {string} helmetObj.robots - A robotok számára adott utasítások (pl. "noindex", "nofollow").
 */

const PageHelmet = ({ helmetObj }) => {

  const titleStart = "NOE XVI.";

  const {metaNameObj } = helmetObj || metaAndOpengraphTag.homepage;

    const location = useLocation();
    const canonicalUrl = `https://xvi-ne.hu${location.pathname}`;

  return (
    <HelmetProvider>
      <Helmet>
        <title>{metaNameObj?.title || titleStart}</title>
        <meta name="description" content={metaNameObj?.description || ""} />
        <meta name="keywords" content={metaNameObj?.keywords || metaAndOpengraphTag.homepage.keywords} />
        <meta name="robots" content={metaNameObj?.robots || "index,follow"} />
        {
          metaNameObj.title === "404 - az oldal nem található" ? (()=>{})() :  <link rel="canonical" href={canonicalUrl} data-rh="true"/>
        }
      </Helmet>
    </HelmetProvider>
  );
};

export default PageHelmet;
