import { useEffect } from "react";
import animateSliderPanel from "../Functions/animateSliderPanel";
import LinkBTN from "./LinkBTN";

const SliderPanel = () =>{

    

    let loremPics = [];

    for(let i = 268; loremPics.length < 10; i+=11) {
        const  loremPicsUrl = `https://picsum.photos/id/${i}/400/200`;
        loremPics.push(loremPicsUrl);
    }

    // console.log(loremPics)

    useEffect(()=>{
        animateSliderPanel();

    },[loremPics.length])


    return(
        <aside id="slider-panel" className="slider-panel">
                
            {
                loremPics.map((item,index)=>{
                    return(
                        <div  key={index} className="d-none px-1 d-flex flex-column flex-md-row align-items-center gap-1 animate__animated">
                            <img   src={item} alt="" />
                            <section>
                                <h3>Programok oldalra feltöltött hír </h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi atque quia voluptatibus nihil mollitia sequi tempora adipisci? Rerum, ab nesciunt? </p>
                            <LinkBTN text="Tovább a cikkhez"/> 
                            </section>
                        </div>
                    )
                })
            }
            

        </aside>
    )
}

export default SliderPanel