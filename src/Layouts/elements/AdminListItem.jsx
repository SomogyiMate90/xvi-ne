import { Link } from "react-router-dom"
import { useIsLog } from "../../Functions/contexts/isLogConTexr";


const AdminListItem = () =>{

    const { setIsLog} = useIsLog();

    const logOut = () =>{

        setIsLog(false);
        window.location = '/';
    }

    return(
        <>
        <li className='nav-item admin pe-0'>
        <div className="d-flex gap-3 justify-content-between">
            <Link to="/Adminisztrátor" className={decodeURIComponent(window.location.pathname) ===  'adminisztrátor' ? 'nav-link active' : 'nav-link transform-line'}>
                Weboldal szerekesztése
            </Link>
            <button type="button" onClick={logOut} className="btn btn-danger">Kijelentkezés</button>
        </div>
        </li>
        
        </>
    )
}

export default AdminListItem