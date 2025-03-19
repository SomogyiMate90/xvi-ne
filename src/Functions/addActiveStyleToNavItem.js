
function addActiveStyleToNavItem(ancorTarget){

    if(!(ancorTarget instanceof HTMLAnchorElement)){
        return
    }
    
    const navbarSupportedContentEl = document.getElementById('navbarSupportedContent');

    navbarSupportedContentEl.querySelectorAll('a').forEach(v=>{

        v.classList.remove('active')
    })
        ancorTarget.classList.add('active')

}

export default addActiveStyleToNavItem;