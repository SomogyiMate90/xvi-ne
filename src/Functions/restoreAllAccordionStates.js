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


      // Állítsuk be a gomb classList-ét
      btn.className = stateObj.buttonStyles.split('|').join(' ');
      btn.setAttribute('aria-expanded', stateObj.expanded ? 'true' : 'false');

      console.log(stateObj.expanded)

      // Keressük meg a hozzá tartozó accordion collapse elemet
      const contentEl = parent.querySelector(target);
  
      if (contentEl) {
        // Állítsuk be a megfelelő osztályokat a nyitott vagy csukott állapot szerint
        if (stateObj.expanded) {

          // Győződjünk meg róla, hogy a tartalom elemen van "show"
          // contentEl.classList.remove('collapse'); // Ide nem feltétlenül szükséges, mert alapból "collapse" van
          contentEl.classList.add('accordion-collapse','collapse','show');
          // Általában a Bootstrap használt osztályai: "accordion-collapse collapse show"
          // Ha teljesen szeretnéd visszaállítani, akkor:
          // contentEl.className = "accordion-collapse collapse show";
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