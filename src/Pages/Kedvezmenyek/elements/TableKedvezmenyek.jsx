import LinkOutTargetBlank from "../../../shared/LinkOutTargetBlank";
import { useContext } from "react";
import Theme from "../../../Functions/themes/ThemeContext";
import getAncorPhoneNume from "../../../Functions/Utils/getAncorPhoneNume";

const TableKedvezmenyek = ({ kedv }) => {
  const theme = useContext(Theme);

  if (!Array.isArray(kedv)) return;

  return (
    <table
      className={
        theme === "light"
          ? "table table-hover d-flex d-none d-xl-block"
          : "table table-dark table-hover d-flex d-none d-xl-block"
      }
    >
      <thead>
        <tr>
          <th className="text-center">Név</th>
          <th className="text-center">Cím</th>
          <th className="text-center">Leírás</th>
          <th className="text-center">Telefonszám</th>
          <th className="text-center">Link</th>
        </tr>
      </thead>
      <tbody>
        {kedv.map((item, index) => {
          const { docId, data } = item;

          let ancorPhoneNum = null;
          if(data?.phoneNumber !== 'Nincs telefonszám') {
            ancorPhoneNum = getAncorPhoneNume(data.phoneNumber);
          }

          return (
            <tr key={docId}>
              <td className="text-center">{data?.title}</td>
              <td className="text-center">{data?.address}</td>
              <td>{data?.text}</td>
              <td style={{minWidth: "10rem"}} className="text-center">
                {
                  data?.phoneNumber !== 'Nincs telefonszám' ? <LinkOutTargetBlank link={{ href: ancorPhoneNum, text: data.phoneNumber }} /> : "Nincs"
                  
                  }
              </td>
              <td className="text-center">
                {data?.link ? (
                  <LinkOutTargetBlank
                    link={{ href: data?.link, text: data?.link }}
                  />
                ) : (
                  "nincs megadva"
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableKedvezmenyek;
