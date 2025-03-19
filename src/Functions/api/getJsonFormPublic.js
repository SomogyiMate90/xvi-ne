// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
async function getJsonFormPublic(url){
    
    // await delay(4000);
    const resp = await fetch(url)
    
    if(resp.ok){
        
        const kibontottAdat = await resp.json();
    
        return kibontottAdat;
   
    }
    
    


}

export default getJsonFormPublic;