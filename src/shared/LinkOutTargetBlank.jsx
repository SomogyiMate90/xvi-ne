import { useContext } from "react";
import Theme from "../Functions/themes/ThemeContext";


const LinkOutTargetBlank = ({link,myStyle=''}) =>{

    const theme = useContext(Theme)

    const {href = '' , text} = link

    if( typeof href !== 'string' || typeof text !== 'string' || href.length === 0 || href === 'tel:') {
        return null;
    }   

    
 
    let validPhone;

    if( href.startsWith('tel:')){
        validPhone = href;
    }

    let validHref = href.startsWith('http') === true ? href : `https://${href}`;

    return(
        <a className={`link-out transform-line ${theme} ${myStyle}`} href={validPhone || validHref} rel="noopener noreferrer" target="_blank">{text}</a>
    )
}

export default LinkOutTargetBlank;