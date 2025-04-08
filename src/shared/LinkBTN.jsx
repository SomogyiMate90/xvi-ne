import { Link } from "react-router-dom";
import toNavigateTop from "../Functions/toNavigateTop";

const LinkBTN = ({ text, url, btnStyle = 'btn btn-info', anStyle = 'text-center' }) => {
  return (
    <Link className={anStyle} to={url}>
      <button  onClick={()=>toNavigateTop({behavior : 'auto'})} type="button" className={btnStyle} >
        {text}
      </button>
    </Link>
  );
};

export default LinkBTN;