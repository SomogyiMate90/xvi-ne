/**
 * 
 * @param {string} text 
 */
export default function getEnglishUrl(text){

    if(typeof text !== 'string') return;

    const lowerText = text.trim().toLowerCase();
    const spltedText = lowerText.split("");

    const formatedText = spltedText.reduce((acc,item,index)=>{

        if (!/[a-záéíóöőúüű\s]/.test(item)) return acc;
        if(acc[index-1] === '-' && item === ' ' ) return acc;


        let caracter;


        switch(item){
            case 'á' : caracter = 'a';
            break;
            case "é" : caracter = "e";
            break;
            case "í" : caracter = "i";
            break;
            case "ó" :
            case "ö" :
            case "ő" : caracter = "o";
            break;
            case "ú" :
            case "ü" :
            case "ű" : caracter = "u";
            break;
            case " " : caracter = "-";
            break;
            default: caracter = item;
        }
        
        acc += caracter;
        return acc;
    },"")

    return formatedText;


}