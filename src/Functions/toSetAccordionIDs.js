/**
 * 
 * @param {string} key 
 */
export default function getAccordionStyles(key){
    console.log(key)

    if(typeof key !== 'string') return;

    const sessionValue = sessionStorage.getItem(key);
    console.log(sessionValue)

    if(!sessionValue) return;
    else{
        const stringValue = sessionValue.replaceAll('|',' ');
       console.log(stringValue)
       return stringValue;    
    }
}