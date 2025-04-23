import { useContext } from "react";
import { faceBookIcon, youTubeIcon } from "../Functions/themes/icons";
import Theme from "../Functions/themes/ThemeContext";
import LinkBTN from "../shared/LinkBTN";
import InlineLink from "../shared/InlineLink";
import MapBtn from "../shared/MapBtn";

const PageFooter = () => {

  const theme = useContext(Theme)

  return (
    <div className={`page-footer ${theme}`}>
        <footer className="m-0">
            <h3 className="mb-4">Elérhetőségek</h3>
          
            <address className="row gx-0 gy-lg-2">
              <div className="col-12 col-md-6 col-lg-6 col-xl-12 d-xl-flex gap-2 justify-content-evenly align-items-center col-xxl-7" >
                <div className="d-flex justify-content-center align-items-center">
                  <p className="text-indent-no">Telephely:<br className="d-sm-none d-md-block d-xxl-none"/> 1165 Budapest, Veres Péter út 157.</p>
                  <MapBtn className='d-block' address='1165 Budapest, Veres Péter út 157' />
                  
                </div>
                {/* <p>Székhely: 1165 Budapest Íjász utca 17/B</p> */}
                <p className="text-indent-no">Email:<br className="d-sm-none d-md-block d-xxl-none"/><InlineLink myStyle='text-info'  to='mailto:nagycsaladosok16@gmail.com'>nagycsaladosok16@gmail.com</InlineLink> </p>
              </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-12 d-xl-flex gap-5 justify-content-center align-items-center col-xxl-5">
              <p className="text-indent-no">
                <LinkBTN text='Csatlakozási lehetőség' url='/Csatlakozz'/>
              </p>
              <p className="text-indent-no">Facebook: <a href="https://www.facebook.com/NE16ker" target="_blank" rel="noopener noreferrer" aria-label='Tovább navigálás a Nagycsaládosok Egyesületének Facebook oldalára' >{faceBookIcon}</a></p>
              <p className="text-indent-no mb-0 mb-md-3">Youtube: <a href="http://www.youtube.com/@xvi.keruletinagycsaladosok8334" target="_blank" rel="noopener noreferrer" aria-label='Tovább navigálás a Nagycsaládosok Egyesületének Youtube Csatronájára'>{youTubeIcon}</a></p>
            </div>
            </address>
          
     
        </footer>
    </div>
  );
};

export default PageFooter;



     {/* <div className="col-12 col-lg-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d492.9036862567181!2d19.200528117257278!3d47.51359696012714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741c5ddbf3343a5%3A0x73ba2920a679e5cb!2sXVI.%20ker%C3%BCleti%20Nagycsal%C3%A1dosok%20Egyes%C3%BClete!5e1!3m2!1shu!2shu!4v1740951780294!5m2!1shu!2shu"
              title="XVI. kerületi Nagycsaládosok Egyesülete"
              sandbox="allow-scripts allow-same-origin"
              width="600"
              height="200"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div> */}