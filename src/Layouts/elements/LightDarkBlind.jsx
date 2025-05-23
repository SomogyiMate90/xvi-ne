import { useContext, useEffect } from "react";
import { akadalymentesIkon, moon, sun } from "../../Functions/themes/icons";
import Theme from "../../Functions/themes/ThemeContext";

const LightDarkBlind = ({ setTheme }) => {
  const actualTheme = useContext(Theme);

  // Betöltjük az értéket a localStorage-ból
  useEffect(() => {
    const savedTheme = localStorage.getItem("XviNeActualTheme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []); // ✅ Csak egyszer fusson le!

  // Ha változik az actualTheme, frissítse a localStorage-ot
  useEffect(() => {
    if (actualTheme) {
      localStorage.setItem("XviNeActualTheme", actualTheme);
    }
  }, [actualTheme]); // ✅ Figyeli a változást

  const handleAkadaly = () => {
    const btnEl = document.getElementById("btn-akadaly");

    if (btnEl.classList.contains("btn-primary")) {
      if (document.getElementById("night-light-checkbox").checked) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
      btnEl.classList.remove("btn-primary");
    } else {
      setTheme("akadaly");
      btnEl.classList.add("btn-primary");
    }
  };

  /**
   * 
   * @param {Event} event 
   */
  const setLightDarkTheme = (event) => {
    if (actualTheme === "akadaly") return;

    const newTheme = event.target.checked ? "dark" : "light";
    setTheme(newTheme);
  };

  return (

    <div id='theme-blind-btn-group' className="ps-3 ps-lg-0 d-flex flex-lg-column flex-xxl-row   justify-content-xl-center gap-2 gap-lg-0">
      <label htmlFor="night-light-checkbox" className="night-light-label">
        <input onChange={(event)=>setLightDarkTheme(event)} type="checkbox" checked={actualTheme === 'dark' ? true : false } id="night-light-checkbox" />
        <span className="night-light-ball"></span>
        {sun}
        {moon}
      </label>
    <button id="btn-akadaly" aria-label='kontrasztos nézet mód be/ki kapcsolása'  className={actualTheme === 'akadaly' ? 'btn btn-primary ' : 'btn'} onClick={handleAkadaly}>
      {akadalymentesIkon}
    </button>
    </div>


  );
};

export default LightDarkBlind;
