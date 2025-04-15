import { useContext } from "react";
import { Link } from "react-router-dom";
import Theme from "../Functions/themes/ThemeContext";
import toNavigateTop from "../Functions/toNavigateTop";


const InlineLink = ({ to, children }) => {
    const theme = useContext(Theme);
    return (
  <Link className={`link-out transform-line ${theme}`} to={to} onClick={()=>toNavigateTop({behavior : 'auto'})}>
    {children}
  </Link>)
};

export default InlineLink;