import { animationStylesToSliderPanel } from "./themes/animationStyles";
import getRandumNum from "./Utils/getRandomNum";

function animateSliderPanel(paranetid = 'slider-panel', faster = 1){

    const sliderPanelEl = document.getElementById(paranetid)

    const countOfSliderPanelChild = sliderPanelEl.children.length;

    const stlyesArray = animationStylesToSliderPanel;
    const stlyesMax = stlyesArray.length;

    let i = 1;

    if(i=== 1){
        setTimeout(()=>{
            const selectedPicindex = 0;
            const selectedPic =  sliderPanelEl.children[selectedPicindex];
            const getIndexForStyleIn = getRandumNum(stlyesMax-1,0)
            const getIndexForStyleOut = getRandumNum(stlyesMax-1,0)
    
            setTimeout(()=>{    
                selectedPic.classList.remove('d-none');
                selectedPic.classList.add(stlyesArray[getIndexForStyleIn][0])
            },200 * faster)
    
            setTimeout(()=>{
                selectedPic.classList.remove(stlyesArray[getIndexForStyleIn][0]);
                selectedPic.classList.add(stlyesArray[getIndexForStyleOut][1])
            },8900 * faster)
    
            setTimeout(()=>{
            selectedPic.classList.remove(stlyesArray[getIndexForStyleOut][1]);
            selectedPic.classList.add('d-none')
            },9800 * faster)
          },1)

          i++;
    }

    let index = 1;
        setInterval(()=>{
            
            if(index >= countOfSliderPanelChild){
                index = 0;
            }
            const selectedPic =  sliderPanelEl.children[index];
            const getIndexForStyleIn = getRandumNum(stlyesMax-1,0)
            const getIndexForStyleOut = getRandumNum(stlyesMax-1,0)

            index++;
    
            setTimeout(()=>{    
                selectedPic.classList.add(stlyesArray[getIndexForStyleIn][0])
                selectedPic.classList.remove('d-none');
            },200 * faster)
    
            setTimeout(()=>{
                selectedPic.classList.add(stlyesArray[getIndexForStyleOut][1]);
                selectedPic.classList.remove(stlyesArray[getIndexForStyleIn][0]);
            },8900 * faster)
    
            setTimeout(()=>{
            selectedPic.classList.remove(stlyesArray[getIndexForStyleOut][1]);
            selectedPic.classList.add('d-none')
            },9800 * faster)
    
        },10000 * faster)



   
}

export default animateSliderPanel;