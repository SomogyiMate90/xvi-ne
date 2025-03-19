import BemutatkozasPluszNyilatkozat from "./elements/BemutatkozasPluszNyilatkozat";
import Section2 from "./elements/Section2";

const AboutUs = () => {
  return (
    <div className="page-about-us">
      <h1>Rólunk</h1>

      <BemutatkozasPluszNyilatkozat />
      <Section2/>
    </div>
  );
};
export default AboutUs;
