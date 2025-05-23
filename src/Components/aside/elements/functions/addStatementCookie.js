export default function addStatementCookie(stirng){
    
    const now = Date.now();
    
    const elfogadva = new Date(now).toLocaleString();  
    
    const expire = new Date(now + 31536000000);
    
    const newCookie = `statementCookie=${stirng}_${elfogadva.replaceAll(' ','')}; expires=${expire.toUTCString()}; path=/`;
    
    document.cookie = newCookie;
}