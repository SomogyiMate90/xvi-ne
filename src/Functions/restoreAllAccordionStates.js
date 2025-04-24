/**
 * Visszaállítja az accordion elemek állapotát a sessionStorage alapján.
 * @param {string} accordionParentId - A szülő elem ID-je, például "about-us-accordion".
 */
export function restoreAllAccordionStates(accordionParentId) {
  const parent = document.getElementById(accordionParentId);
  if (!parent) return;

  const buttons = parent.querySelectorAll('button.accordion-button');
  
  buttons.forEach(btn => {
    const target = btn.getAttribute('data-bs-target');
    if (!target) return;

    const cleanId = target.replace('#', '');
    const saved = sessionStorage.getItem(cleanId);
    if (!saved) return;

    try {
      const stateObj = JSON.parse(saved);

      btn.className = stateObj.buttonStyles.split('|').join(' ');
      btn.setAttribute('aria-expanded', stateObj.expanded ? 'true' : 'false');

      const contentEl = parent.querySelector(target);
  
      if (contentEl) {
        if (stateObj.expanded) {

          contentEl.classList.add('accordion-collapse','collapse','show');
        } else {
          contentEl.classList.remove('show');
          contentEl.classList.add('collapse');
          contentEl.className = "accordion-collapse collapse";
        }
      }
    } catch (err) {
      console.error('Hibás mentett adat a sessionStorage-ben:', err);
    }
  });
}