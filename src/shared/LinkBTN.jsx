import { Link } from "react-router-dom";
import toNavigateTop from "../Functions/toNavigateTop";

const LinkBTN = ({ text, url }) => {
  return (
    <Link to={url}>
      <button onClick={()=>toNavigateTop({behavior : 'auto'})} type="button" className="btn btn-info">
        {text}
      </button>
    </Link>
  );
};

export default LinkBTN;
