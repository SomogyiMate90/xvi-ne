import { useContext } from "react";
import { faceBookIcon, youTubeIcon } from "../Functions/themes/icons";
import Theme from "../Functions/themes/ThemeContext";
import LinkBTN from "../shared/LinkBTN";
import InlineLink from "../shared/InlineLink";
import MapBtn from "../shared/MapBtn";
import Vezetoseg from "../Components/Vezetoseg";

const PageFooter = ({showGDPRBox,setShowGDPRBox}) => {

  const theme = useContext(Theme)

  return (
    <div className={`page-footer ${theme}`}>
        <footer className="m-0">
            <h3 className="mb-4">Elérhetőségek</h3>
          
            <div className="row gx-0 gy-lg-2">
              <address className="col-12 col-md-6 col-lg-6 col-xl-12 d-xl-flex gap-2 justify-content-evenly align-items-center col-xxl-7" >
                <div className="d-flex justify-content-center align-items-center">
                  <p className="text-indent-no">Telephely:<br className="d-sm-none d-md-block d-xl-none"/> 1165 Budapest, Veres Péter út 157.</p>
                  <MapBtn className='d-block me-2' address='1165 Budapest, Veres Péter út 157' />        
                </div>
                <p className="text-indent-no">Email:<br className="d-sm-none d-md-block d-xl-none"/><InlineLink myStyle='text-info'  to='mailto:nagycsaladosok16@gmail.com'>nagycsaladosok16@gmail.com</InlineLink> </p>
                <p className=" cursor-pointer hover-green" onClick={()=>{setShowGDPRBox(true)}}> Adatvédelmi nyilatkozat / Sütibeállítások</p>
              </address>

            <div className="d-flex flex-column align-items-center col-12 col-md-6 col-lg-6 col-xl-12 flex-xl-row gap-xl-5 justify-content-center align-items-center col-xxl-5 pe-xxl-3">
             
                <LinkBTN btnStyle='mb-3 btn btn-info text-nowrap' text='Csatlakozási lehetőség' url='/Csatlakozz'/>
            
              <div className=" d-flex align-items-end"><Vezetoseg/></div>
              <p className="text-indent-no">Facebook: <a href="https://www.facebook.com/NE16ker" target="_blank" rel="noopener noreferrer" aria-label='Tovább navigálás a Nagycsaládosok Egyesületének Facebook oldalára' >{faceBookIcon}</a></p>
              <p className="text-indent-no mb-0 mb-md-3">Youtube: <a href="http://www.youtube.com/@xvi.keruletinagycsaladosok8334" target="_blank" rel="noopener noreferrer" aria-label='Tovább navigálás a Nagycsaládosok Egyesületének Youtube Csatronájára'>{youTubeIcon}</a></p>
            </div>
            </div>
        </footer>
    </div>
  );
};

export default PageFooter;
