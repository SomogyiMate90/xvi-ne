
import { Link } from "react-router-dom";
import { useIsLog } from "../../Functions/contexts/isLogConTexr";
import AdminListItem from "./AdminListItem";


const NavListLinks = () =>{

    const firstRenderingPathName = decodeURIComponent(window.location.pathname);

    const {isLog} = useIsLog();



    const listLinks = [
        {text : 'Kezdőoldal', uri : '/'},
        {text : 'Rólunk', uri : '/rólunk'},
        {text : 'Programok', uri : '/programok'},
        {text : 'Csatlakozz', uri : '/csatlakozz'},
        {text : 'Adományok', uri : '/adományok'},
        {text : 'Kedvezmények', uri : '/kedvezmények'},
        {text : 'Galéria', uri : '/galéria'},
        {text : 'Dokumentumok', uri : '/dokumentumok'},
        // {text : 'Admin (id)', uri : '/adminisztrátor'},
    ]


return(
    <ul className="ms-lg-4 mt-2 mt-lg-0 navbar-nav me-auto mb-2 mb-lg-0 flex-wrap">
        {
            listLinks.map((listItem, index)=>{



                return(
                    <li key={index} className='nav-item'>
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
        {/* <li className="nav-item dropdown">
  <button
    className="nav-link dropdown-toggle"
    data-bs-toggle="dropdown"
    aria-expanded="false"
    type="button"
    role="button"
  >
    Közösség
  </button>
  <ul className="dropdown-menu">
    <li>
      <Link className="dropdown-item" to="/dokumentumok">Dokumentumok</Link>
    </li>
    <li>
      <Link className="dropdown-item" to="/galéria">Galéria</Link>
    </li>
    <li>
      <Link className="dropdown-item" to="/kedvezmények">Kedvezmények</Link>
    </li>
  </ul>
</li> */}
  </ul>
)
}

export default NavListLinks;