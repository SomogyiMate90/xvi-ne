
import { Link } from "react-router-dom";
import { useIsLog } from "../../Functions/contexts/isLogConTexr";
import AdminListItem from "./AdminListItem";


const NavListLinks = () =>{

    const firstRenderingPathName = decodeURIComponent(window.location.pathname);

    const {isLog} = useIsLog();



    const listLinks = [
        {text : 'Kezdőoldal', uri : '/'},
        {text : 'Rólunk', uri : '/rolunk'},
        {text : 'Programok', uri : '/programok'},
        {text : 'Csatlakozz', uri : '/csatlakozz'},
        {text : 'Adományok', uri : '/adomanyok'},
        {text : 'Kedvezmények', uri : '/kedvezmenyek'},
        {text : 'Galéria', uri : '/galeria'},
        // {text : 'Dokumentumok', uri : '/dokumentumok'},
        // {text : 'Admin (id)', uri : '/adminisztrátor'},
    ]


return(
    <ul className="ms-lg-0 mt-2 mt-lg-0 navbar-nav me-auto mb-2 mb-lg-0 flex-wrap">
        {
            listLinks.map((listItem, index)=>{



                return(
                    <li key={index} className='nav-item px-1 '>
                        <Link to={listItem?.uri}
                              className={firstRenderingPathName ===  listItem?.uri ? 'nav-link active' : 'nav-link transform-line'}
                        >
                            {listItem?.text}
                        </Link>
                    </li>
                )
            })
        }
        {
          
          isLog === true ? <AdminListItem/> : <></> 

        }   
  </ul>
)
}

export default NavListLinks;