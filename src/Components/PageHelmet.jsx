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
 */

const PageHelmet = ({ helmetObj }) => {
  const titleStart = "NOE XVI.";

  const {metaNameObj } = helmetObj || metaAndOpengraphTag.homepage

  return (
    <HelmetProvider>
      <Helmet>
        <title>{metaNameObj?.title || titleStart}</title>
        <meta name="description" content={metaNameObj?.description || ""} />
        <meta name="keywords" content={metaNameObj?.keywords || metaAndOpengraphTag.homepage.keywords} />
        <meta name="robots" content={metaNameObj?.robots || "index,follow"} />
      </Helmet>
    </HelmetProvider>
  );
};

export default PageHelmet;
