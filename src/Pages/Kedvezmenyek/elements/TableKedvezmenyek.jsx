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
          ? "table table-hover d-flex d-none d-xxl-block"
          : "table table-dark table-hover d-flex d-none d-xxl-block"
      }
    >
      <thead>
        <tr>
          <th className="text-center">Név</th>
          <th className="text-center">Cím</th>
          <th className="text-center">Leírás</th>
          <th className="text-center">Nyitvatartás</th>
          <th className="text-center">Telefonszám</th>
          <th className="text-center">Link</th>
        </tr>
      </thead>
      <tbody>
        {kedv.map((item, index) => {
          const { docId, data } = item;

          const { description = '' } = data;

          const validDescription = String(description).split('\n').map((i,n)=>{

            if(i !== ''){
              return (<span className="d-block" key={n}>{i}</span>)
            }

          })

          let ancorPhoneNum = null;
          if(data?.phoneNumber !== 'Nincs telefonszám') {
            ancorPhoneNum = getAncorPhoneNume(data.phoneNumber);
          }

          return (
            <tr key={docId}>
              <td className="text-center align-middle">{data?.title}</td>
              <td style={{minWidth: "8rem"}} className="text-center align-middle">{data?.address}</td>
              <td className="text-justify align-middle">{data?.text}</td>
              <td style={{minWidth: "18rem"}} className="text-center align-middle">{validDescription}</td>
              <td style={{minWidth: "5rem"}} className="text-center align-middle">
                {
                  data?.phoneNumber !== 'Nincs telefonszám' ? <LinkOutTargetBlank link={{ href: ancorPhoneNum, text: data.phoneNumber }} /> : "Nincs"
                  
                  }
              </td>
              <td className="text-center align-middle">
                {data?.link ? (
                  <LinkOutTargetBlank
                    link={{ href: data?.link, text: data?.link }}
                  />
                ) : (
                  <span>nincs megadva</span>
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
