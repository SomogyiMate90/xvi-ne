import { Link } from "react-router-dom";

const LinkBTN = ({ text, url }) => {
  return (
    <Link to={url}>
      <button type="button" className="btn btn-info">
        {text}
      </button>
    </Link>
  );
};

export default LinkBTN;
