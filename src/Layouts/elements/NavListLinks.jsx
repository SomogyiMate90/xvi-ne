
import { Link } from "react-router-dom";
import { useIsLog } from "../../Functions/contexts/isLogConTexr";
import AdminListItem from "./AdminListItem";


const NavListLinks = () =>{

    const firstRenderingPathName = decodeURIComponent(window.location.pathname);

    const {isLog} = useIsLog();



    const listLinks = [
        {text : 'Kezdőoldal', uri : '/'},
        {text : 'Rólunk', uri : '/Rólunk'},
        {text : 'Programok', uri : '/Programok'},
        {text : 'Csatlakozz', uri : '/Csatlakozz'},
        {text : 'Adományok', uri : '/Adományok'},
        {text : 'Kedvezmények', uri : '/Kedvezmények'},
        {text : 'Galéria', uri : '/Galéria'},
        {text : 'Dokumentumok', uri : '/Dokumentumok'},
        // {text : 'Admin (id)', uri : '/adminisztrátor'},
    ]


return(
    <ul className="ms-lg-4 mt-2 mt-lg-0 navbar-nav me-auto mb-2 mb-lg-0 flex-wrap">
        {
            listLinks.map((listItem, index)=>{



                return(
                    <li key={index} className='nav-item'>
                        <Link to={listItem?.uri}
                              className={firstRenderingPathName ===  listItem?.uri ? 'nav-link active' : 'nav-link'}
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