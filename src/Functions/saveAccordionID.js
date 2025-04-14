/**
 * 
 * @param {Event} event 
 */
export default function saveAccordionID(event){

    if(!(event.target instanceof HTMLButtonElement)) return;

    if(event.target.classList.contains('accordion-button')){

        const accordionEl = event.target;

        const actualStyles = Array.from(accordionEl.classList)
        const accordionId = accordionEl.dataset.bsTarget;

        if(!accordionId) return

        if(actualStyles.some(v=>v==='collapsing')) return;
/**
 * @type {string}
 */
        const cleanId = accordionId.replace('#','')

        console.log(accordionId);

        console.log(actualStyles);
        
        const stlyeList = actualStyles.join('|');

        sessionStorage.setItem(cleanId,stlyeList);

    }
    else{
        return
    }

}