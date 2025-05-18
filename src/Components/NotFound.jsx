import LinkBTN from "../shared/LinkBTN";
import PageHelmet from "./PageHelmet";
import metaAndOpengraphTag from "../Functions/helm/metaAndOpengraphTag.js";

const NotFound = () => {

    const notFoundHelm = metaAndOpengraphTag.notFound

  return (
    <>
      <PageHelmet helmetObj={notFoundHelm} />
      <div className="hero-img empty-swing-hero-img postion-relative">
        <h1 className="poz-center top">A keresett oldal nem található</h1>
        <LinkBTN
          btnStyle="position-absolute bottom-0 end-0 mb-3 me-3 btn btn-info "
          text="Vissza a fő oldalra"
          url="/"
        />
      </div>
    </>
  );
};

export default NotFound;
