import { Link } from "react-router-dom";
import toNavigateTop from "../Functions/toNavigateTop";

const LinkBTN = ({ text, url, classStyle = "btn btn-info" }) => {
  return (
    <Link
      to={url}
      onClick={() => toNavigateTop({ behavior: "auto" })}
      className={classStyle}
    >
      {text}
    </Link>
  );
};

export default LinkBTN;
