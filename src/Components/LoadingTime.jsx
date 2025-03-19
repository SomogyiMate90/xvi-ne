import { useContext } from "react";
import Theme from "../Functions/themes/ThemeContext";

const LoadingTime = ({text = {title: 'Töltés...'}}) =>{

    const {title, content} = text;

    const theme = useContext(Theme)

    return(
        <div className={`static-loading-field ${theme}`}>
            <h1>{title}</h1>
            <p>{content}</p>
            <div className="loading-gif">
                <img src="/assets/img/loadingGIF.gif" alt="töltés" />
            </div>
        </div>

    )
}

export default LoadingTime;