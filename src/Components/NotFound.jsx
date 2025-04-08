import LinkBTN from "../shared/LinkBTN";

const NotFound = () =>{
    return(
        <div className="hero-img empty-swing-hero-img">

            <h1 className="poz-center top">A keresett oldal nem található</h1>
            <LinkBTN classStyle='btn btn-info mb-2 ms-auto me-2' text='Vissza a fő oldalra' url='/'/>
        </div>
    )
}

export default NotFound;