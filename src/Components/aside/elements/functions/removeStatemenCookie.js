import addStatementCookie from "./addStatementCookie";

export default function removeStatementCookie(){

  
const deleteCookie = (name, path, domain) => {
document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path || '/'}${domain ? `; domain=${domain}` : ''}`;
};


const cookieName = document.cookie.split('=')[0].trim();
            if (cookieName.startsWith('_ga')) {
            deleteCookie(cookieName, '/', '.xvi-ne.hu');
            deleteCookie(cookieName, '/', 'xvi-ne.hu');
            deleteCookie(cookieName, '/', '');
            deleteCookie(cookieName, '/');
            }


    addStatementCookie('elutasítva_a_hozzajarulas_')
    

}