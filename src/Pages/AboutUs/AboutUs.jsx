import { useContext } from "react";
import PageHelmet from "../../Components/PageHelmet";
import metaAndOpengraphTag from "../../Functions/helm/metaAndOpengraphTag";
import BemutatkozasPluszNyilatkozat from "./elements/BemutatkozasPluszNyilatkozat";
import Section2 from "./elements/Section2";
import Theme from "../../Functions/themes/ThemeContext";

const AboutUs = () => {

  const actualTheme = useContext(Theme);
  return (
    <>
    <PageHelmet helmetObj={metaAndOpengraphTag.aboutUs}/>
    <div className="page-about-us">
      <div className="hero-img about-us-img">
        <h1 className={`alt-position ${actualTheme}`}>Rólunk</h1>

      </div>

      <div className="mt-3 mt-lg-5">
        <BemutatkozasPluszNyilatkozat />
      </div>
      <Section2/>
    </div>
    </>
  );
};
export default AboutUs;
