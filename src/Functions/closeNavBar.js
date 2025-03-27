import addActiveStyleToNavItem from "./addActiveStyleToNavItem";
import toNavigateTop from "./toNavigateTop";

/**
 * 
 * @param {Event} event 
 */
function closeNavBarNavElement(event){

    const logoEl = document.getElementById('logo-img');

    if(event.target instanceof HTMLAnchorElement || event.target === logoEl){
        document.getElementById('navbarSupportedContent').classList.remove('show');
        document.getElementById('navbarBtn').ariaExpanded = false;
        addActiveStyleToNavItem(event.target);
        toNavigateTop();        
    }
    event.stopPropagation();
}

/**
 * 
 * @param {Event} event 
 */
function closeNavBarNotNavElement(event){
    if(event.bubbles){
        document.getElementById('navbarSupportedContent').classList.remove('show');
        document.getElementById('navbarBtn').ariaExpanded = false;
    }
}

export {
    closeNavBarNavElement,
    closeNavBarNotNavElement
}