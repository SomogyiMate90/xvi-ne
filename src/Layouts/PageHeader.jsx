import { Link } from "react-router-dom";
import { closeNavBarNavElement } from "../Functions/closeNavBar";
import NavListLinks from "./elements/NavListLinks";
import LightDarkBlind from "./elements/LightDarkBlind";
import { useContext } from "react";
import Theme from "../Functions/themes/ThemeContext";

const PageHeader = ({setTheme}) => {
  const actualTheme = useContext(Theme)


  return (
    <header className={actualTheme} onClick={(event) => closeNavBarNavElement(event)}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/">
            <img
              id='logo-img'
              src="/assets/img/logo_with_text.webp"
              alt="XVI kerületi Nagycsaládosok Egyesület"
              aria-label="Navigálás a kezőoldalra"
              width="270"
              height="65"
            />
          </Link>

   

          <button
            id="navbarBtn"
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
           {/* Menü */}
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <NavListLinks />
          <LightDarkBlind setTheme={setTheme} />
         
          </div>
        </div>
      </nav>
    </header>
  );
};

export default PageHeader;
