import { useLocation } from "react-router-dom";
import GDPRBOX from "./elements/GDPRBOX";
import { logEvent } from "firebase/analytics";
import { useEffect, useState } from "react";
import runAnalytics from "../../Functions/firebase/analytics/getAnalitycApp";
import removeStatementCookie from "./elements/functions/removeStatemenCookie";

const GDPRCookies = ({ showGDPRBox, setShowGDPRBox }) => {
  const location = useLocation();
  const [runAnalizing, setAnalizing] = useState(false);

  const elfogadoNyilatkozat = document.cookie.includes("statementCookie=hozza_jarulva_");
  const elutasitoNyilatkozat = document.cookie.includes("statementCookie=elutasítva_a_hozzajarulas");

  // ✅ Első render: ha elfogadta a cookie-kat, elindul az analitika és elrejtjük a GDPRBOX-ot
  useEffect(() => {
    if (elfogadoNyilatkozat) {
      if (!runAnalizing) {
        setAnalizing(true);
        setShowGDPRBox(false); // Elrejtjük a GDPRBOX-ot, ha már elfogadta
      }
    }
    else if(elutasitoNyilatkozat){
        removeStatementCookie();
        setShowGDPRBox(true)
    }

  }, [elfogadoNyilatkozat, runAnalizing, setShowGDPRBox]);

  // ✅ Analitika naplózása, ha már hozzájárult és van új oldalmegtekintés
  useEffect(() => {
    if (runAnalizing) {
      logEvent(runAnalytics(), "megtekintett_oldal", {
        page_path: location.pathname + location.search,
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, [location, runAnalizing]);

  return (
    <>
      {showGDPRBox && (
        <GDPRBOX
          setShowGDPRBox={setShowGDPRBox}
          setAnalizing={setAnalizing}
        />
      )}
    </>
  );
};

export default GDPRCookies;
