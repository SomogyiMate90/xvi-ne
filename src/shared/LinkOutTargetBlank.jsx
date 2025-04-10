import { useContext } from "react";
import Theme from "../Functions/themes/ThemeContext";


const LinkOutTargetBlank = ({link}) =>{

    const theme = useContext(Theme)

    const {href , text} = link

    if( typeof href !== 'string' || typeof text !== 'string'){
        return null;
    }   
 
    let validPhone;

    if( href.startsWith('tel:')){
        validPhone = href;
    }

    let validHref = href.startsWith('http') === true ? href : `https://${href}`;

    return(
        <a className={`link-out transform-line ${theme}`} href={validPhone || validHref} rel="noopener noreferrer" target="_blank">{text}</a>
    )
}

export default LinkOutTargetBlank;