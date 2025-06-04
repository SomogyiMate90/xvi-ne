import addStatementCookie from "./addStatementCookie";

export default function removeStatementCookie() {
  const deleteCookie = (name, path = "/", domain = "") => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path};${
      domain ? ` domain=${domain};` : ""
    }`;
  };

  const gaCookiePrefixes = ["_ga", "_gid", "_gat", "_gcl_au"];

  // Az összes elérhető cookie átnézése
  const allCookies = document.cookie.split(";");

  allCookies.forEach(cookie => {
    const name = cookie.split("=")[0].trim();

    gaCookiePrefixes.forEach(prefix => {
      if (name.startsWith(prefix)) {
        // Próbáljuk minden variációban törölni
        deleteCookie(name, "/", "");
        deleteCookie(name, "/", "xvi-ne.hu");
        deleteCookie(name, "/", ".xvi-ne.hu");
        deleteCookie(name, "/", window.location.hostname);
      }
    });
  });

  addStatementCookie("elutasítva_a_hozzajarulas_");
}