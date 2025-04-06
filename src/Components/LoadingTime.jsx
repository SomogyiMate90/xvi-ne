import { useContext } from "react";
import Theme from "../Functions/themes/ThemeContext";

const LoadingTime = ({text = {title: 'Töltés...'}}) =>{

    const {title, content} = text;

    const theme = useContext(Theme);

    let contentComponent;

    if (Array.isArray(content)) {
        contentComponent = content.map((item, index) => (
            <p key={index}>{item}</p>
        ));
    } else if (typeof content === 'string') {
        contentComponent = <p>{content}</p>;
    }


    return(
        <div className={`static-loading-field ${theme}`}>
            <h1>{title}</h1>
            <div>{contentComponent}</div>
            <div className="loading-gif">
                <img src="/assets/img/loadingGIF.gif" alt="töltés" />
            </div>
        </div>

    )
}

export default LoadingTime;