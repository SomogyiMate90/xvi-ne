import addActiveStyleToNavItem from "./addActiveStyleToNavItem";
import toNavigateTop from "./toNavigateTop";

/**
 * 
 * @param {Event} event 
 */
function closeNavBarNavElement(event){
    if(event.target instanceof HTMLAnchorElement){
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