
export default function toNavigateTop(parms = {behavior : 'instant'}){
    const topEl = document.getElementById('page-defalult-layout');

    topEl.scrollIntoView(parms)
}
