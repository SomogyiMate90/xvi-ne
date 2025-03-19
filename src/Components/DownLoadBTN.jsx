import { downMark } from "../Functions/themes/icons";

const DownLoadBTN = ({ classNameText = "", text, funcionArgs }) => {
  const { eleresiUt, addfileName } = funcionArgs;

  return (
    <a href={eleresiUt} download={addfileName}>
      <button className={classNameText}>
        <div className="d-flex gap-2 aling-content-center">
          <span>{text}</span>
          <span>{downMark}</span>
        </div>
      </button>
    </a>
  );
};

export default DownLoadBTN;
