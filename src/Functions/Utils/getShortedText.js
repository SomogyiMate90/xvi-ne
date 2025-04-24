/**
 * 
 * @param {Array} array 
 * @returns 
 */
export default function getShortedText(array,maxCaractes = 320){

    if(!(Array.isArray(array))) return;
    else{

        let actualCharacterNum = 0;
        const maxCharacerNum = maxCaractes;
        const shortedDescription = array.reduce((acc,paragraph)=>{

            const characters = paragraph.split("");
            let newParagraph = [];

            for (let i = 0; i < characters.length && actualCharacterNum < maxCharacerNum; i++, actualCharacterNum++) {
              if (actualCharacterNum === maxCharacerNum - 1 && i < characters.length - 1) {
                newParagraph.push('...');
              } 
              else {
                newParagraph.push(characters[i]);
              }
            }

            if(newParagraph.length>0){
              acc.push(newParagraph.join(""));
            }            
            return acc;
          },[])

          return shortedDescription;
    }



}