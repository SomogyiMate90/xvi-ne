import { useContext, useEffect } from "react";
import { akadalymentesIkon, moon, sun } from "../../Functions/themes/icons";
import Theme from "../../Functions/themes/ThemeContext";

const LightDarkBlind = ({ setTheme }) => {
  const actualTheme = useContext(Theme);

  // Betöltjük az értéket a localStorage-ból
  useEffect(() => {
    const savedTheme = localStorage.getItem("XviNeActualTheme");
    console.log(savedTheme)
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

    <div className="ps-3 d-flex   justify-content-lg-center gap-2 gap-lg-0">
      <label htmlFor="night-light-checkbox" className="night-light-label">
        <input onChange={(event)=>setLightDarkTheme(event)} type="checkbox" id="night-light-checkbox" />
        <span className="night-light-ball"></span>
        {sun}
        {moon}
      </label>
    <button id="btn-akadaly" className="btn" onClick={handleAkadaly}>
      {akadalymentesIkon}
    </button>
    </div>



  );
};

export default LightDarkBlind;
