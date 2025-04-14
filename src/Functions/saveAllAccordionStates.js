/**
 * @param {HTMLElement} accordionParentElem 
 */
export default function saveAllAccordionStates(accordionParentElem) {
    if (!(accordionParentElem instanceof HTMLElement)) return;
  
    const buttons = accordionParentElem.querySelectorAll('button.accordion-button');
  
    buttons.forEach(button => {
      const target = button.getAttribute('data-bs-target'); // pl. "#flush-collapse2"
      if (!target) return;
  
      const contentId = target.replace('#', '');
      const contentEl = document.querySelector(target);
  
      if (!contentEl) return;
  
      // Osztálylista mentése a gombra
      const styleList = Array.from(button.classList).join('|');
  
      // Nézzük, nyitva van-e (megnézzük a 'show' osztályt a tartalmon vagy a 'collapsed' hiányát a gombon)
      const isOpen = styleList.includes('collapsed');
  
      const stateObj = {
        buttonStyles: styleList,
        expanded: !isOpen
      };
  
      sessionStorage.setItem(contentId, JSON.stringify(stateObj));
    });
  }