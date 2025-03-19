import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Theme from "../../Functions/themes/ThemeContext";

const Events = () =>{
    /**
    * @type {Array<{ id: number, "article-img": string, "article-title": string, "article-paragraph": string[] }>} 
     */
    const eventObj = useLoaderData();

    // console.log(eventObj)

    const actualTheme = useContext(Theme);
    console.log(actualTheme)

    return(
        <div className={`page-events ${actualTheme}`}>

            <h1>Közelgő események, Hírek</h1>
            
            {eventObj.map((item,index)=>{
                return(
                    <article className="p-1" key={item.id}>
                        <h2>{item?.["article-title"]}</h2>
                        <div className={index % 2 === 0 ? "d-sm-flex flex-sm-row justify-content-between" : "d-sm-flex flex-sm-row-reverse justify-content-between" }>
                            <div className="d-flex flex-column justify-content-evenly">
                                {
                                    item?.["article-paragraph"].map((i,x)=>{
                                        return(
                                            <p key={x}>{i}</p>
                                        )
                                    })
                                }
                            </div>
                            <figure>
                                <img src={item?.["article-img"]} alt="Egy kapcsolodó kép" />
                            </figure>
                        </div>
                    </article>
                )
            })}


        </div>
    )
}

export default Events;